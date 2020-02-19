import { Component, OnInit,OnDestroy } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public employee: any = [];
  public unsubscribeList : Subscription;
  public unSubscribeEditList: Subscription;
  
  constructor(private connectionService: ConnectionService,public dialog: MatDialog) { }

  ngOnInit() {
    this.unsubscribeList = this.connectionService.getEmployeeList().subscribe((data)=>{
      this.employee = data;
    })
  }
  ngOnDestroy(){
    this.unsubscribeList.unsubscribe();
  }

  editEmployee(item){
    const dialogRef = this.dialog.open(EditDialog,{
      data:item
    });
    dialogRef.afterClosed().subscribe(result => {
      this.unSubscribeEditList = this.connectionService.updateEmployeeList(result).subscribe((data)=>{
        this.employee = data;
      })
    });
  }
}

@Component({
  selector: 'edit-content-dialog',
  templateUrl: 'edit-content-dialog.html',
})
export class EditDialog {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}