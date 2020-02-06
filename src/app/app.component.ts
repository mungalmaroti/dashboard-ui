import { Component } from '@angular/core';
import { ConnectionService } from './services/connection.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dashboard-ui';
  constructor(private connectionService: ConnectionService){}
  public login(){
    this.connectionService.showUserLogin().subscribe((data)=>{
      console.log('data',data);
    })
  }
}
