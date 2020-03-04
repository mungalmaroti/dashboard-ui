import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUser } from '../interface/user-access';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection.service';
import { AuthService } from '../services/auth.service';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public getUser = {} as IUser;
  public user :any = {username:'',password:''};
  public loginForm:FormGroup;
  constructor(private connectionService: ConnectionService, private route: Router, private authService:AuthService){}

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userData': new FormGroup({
          'username':new FormControl(null,[Validators.required]),
          'password':new FormControl(null,[Validators.required]),
      })
    });
  }
  public login(){
      this.connectionService.showUserLogin(this.loginForm.value.userData).subscribe((data:any)=>{
        if(data && data.user){
          this.authService.setUserDetail(data);
          localStorage.setItem('access_token',data.access_token);
          localStorage.setItem('userDetail',JSON.stringify(data));
          this.route.navigate(['/dashboard']);
        }
      })
    }
}
