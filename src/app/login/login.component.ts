import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../interface/user-access';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public useUnsubscribe: Subscription;
  public userLogin : IUser;
  public user : IUser = {username:'',password:'', role:''};
  constructor(private connectionService: ConnectionService, private route: Router){}

  ngOnInit() {
  }
  public login(){
    if(this.user && this.user.username && this.user.password ){
      this.useUnsubscribe = this.connectionService.showUserLogin(this.user).subscribe((data:IUser)=>{
        if(data && data.username){
          this.route.navigate(['/dashboard']);
        }
      })
    }
  }

  ngOnDestroy(){
    this.useUnsubscribe.unsubscribe();
  }
}
