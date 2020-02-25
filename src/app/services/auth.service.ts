import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { IUser } from '../interface/user-access';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : IUser;
  constructor(private router:Router) { }

  getToken(){
    return localStorage.getItem('access_token');
  }
  
  isLoggedIn() : boolean{
    let authToken = localStorage.getItem('access_token');
    return (authToken != null) ? true : false;
  }

  doLogout(){
    let removeToken = localStorage.removeItem('access_token');
    if(removeToken == null){
      this.router.navigate(['login'])
    }
  }

  setUserDetail(data: IUser){
    this.user = data
  }

  getUserDetail(){
    return this.user;
  }
  
}
