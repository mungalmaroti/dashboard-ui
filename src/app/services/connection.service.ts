import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  
  //const localUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  showUserLogin(user){
    //return this.http.get(environment.baseURL+'/api/users?username='+user.username+'&password='+user.password);
    return this.http.get(environment.baseURL+'/api/users?username='+user.username+'&password='+user.password);
  }
}
