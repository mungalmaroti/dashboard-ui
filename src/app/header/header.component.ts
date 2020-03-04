import { Component, OnInit } from '@angular/core';
import { AuthService } from  '../services/auth.service';
import { IUser } from '../interface/user-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentDate:any;
  public userDetail : IUser;
  constructor( private authService: AuthService) {
    setInterval(() => {
      this.currentDate = Date.now();
    }, 1);
   }

   logout(){
     this.authService.doLogout();
   }
  ngOnInit() {
    this.userDetail =JSON.parse(localStorage.getItem('userDetail'));
  }

}
