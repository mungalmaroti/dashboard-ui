import { Component, OnInit,OnDestroy } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Subscription, from } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material'
import { IUser } from '../interface/user-access';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public employee: any = [];
  public unsubscribeList : Subscription;
  public employeeObj: any = {};
  public user: IUser;
  constructor(private connectionService: ConnectionService,public dialog: MatDialog, private authService: AuthService) { }

  ngOnInit() {
    this.unsubscribeList = this.connectionService.getEmployeeList().subscribe((data)=>{
      this.employee = data;
    })
    this.user = this.authService.getUserDetail();
  }
  ngOnDestroy(){
    this.unsubscribeList.unsubscribe();
  }

  addnewEmployee(){
    const dialogRef = this.dialog.open(EditDialog,{
      data:{
        empObj :this.employeeObj,
        isFlag : true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.unsubscribeList = this.connectionService.createEmployee(result).subscribe((data)=>{
          this.employee = data;
        })
      }
    });
  }

  editEmployee(item){
    const dialogRef = this.dialog.open(EditDialog,{
      data:{
        empObj :item,
        isFlag : false
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.unsubscribeList = this.connectionService.updateEmployeeList(result).subscribe((data)=>{
          this.employee = data;
        })
      }
    });
  }

  removeEmployee(id : number){
    this.unsubscribeList = this.connectionService.deleteEmployee(id).subscribe((data)=>{
      this.employee = data;
    })
  }
}

@Component({
  selector: 'edit-content-dialog',
  templateUrl: 'edit-content-dialog.html',
})
export class EditDialog {
  public data : any = [];
  public isFlag :boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public getData: any){
    this.data = getData.empObj
    this.isFlag = getData.isFlag
  }

}