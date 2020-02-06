import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  
  //const localUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  showUserLogin(){
    return this.http.get('/users');
  }
}
