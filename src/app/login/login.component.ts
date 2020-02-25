import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../interface/user-access';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public getUser = {} as IUser;
  public user :any = {username:'',password:''};
  constructor(private connectionService: ConnectionService, private route: Router, private authService:AuthService){}

  ngOnInit() {
  }
  public login(){
    if(this.user && this.user.username && this.user.password ){
      this.connectionService.showUserLogin(this.user).subscribe((data:any)=>{
        if(data && data.user){
          this.authService.setUserDetail(data);
          localStorage.setItem('access_token',data.access_token);
          localStorage.setItem('userDetail',JSON.stringify(data));
          this.route.navigate(['/dashboard']);
        }
      })
    }
  }

}
