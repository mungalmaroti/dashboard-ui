import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  
  //const localUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  showUserLogin(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    //return this.http.get('http://localhost:3000/users',{headers: headerDict});
    return this.http.get('/users');
  }
}
