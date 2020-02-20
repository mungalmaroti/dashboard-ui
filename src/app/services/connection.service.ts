import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  
  constructor(private http: HttpClient) { }

  showUserLogin(user){
    return this.http.get(environment.baseURL+'/api/users/'+user.username+'/'+user.password);
    //return this.http.get(environment.baseURL+'/api/users?username='+user.username+'&password='+user.password);
  }

  getEmployeeList(){
    return this.http.get(environment.baseURL+'/employee/getList')
  }
  createEmployee(obj){
    return this.http.post(environment.baseURL+'/employee/create',{body:obj})
  }
  updateEmployeeList(item:any){
    return this.http.put(environment.baseURL+'/employee/update',{id: item.EMPLOYEE_ID ,body:item})
  }
  deleteEmployee(id:number){
    return this.http.delete(environment.baseURL+'/employee/remove'+id);
  }
}
