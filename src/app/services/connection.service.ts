import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  
  constructor(private http: HttpClient) { }

  // showUserLogin(user:any){
  //   return this.http.get(environment.baseURL+'/api/users?username='+user.username+'&password='+user.password);
  // }
  showUserLogin(user:any){
    return this.http.post(environment.baseURL+'/auth/login',user);
  }

  getEmployeeList(){
    return this.http.get(environment.baseURL+'/employee')
  }
  createEmployee(obj:any){
    return this.http.post(environment.baseURL+'/employee',{body:obj})
  }
  updateEmployeeList(item:any){
    return this.http.put(environment.baseURL+'/employee',{id: item.EMPLOYEE_ID ,body:item})
  }
  deleteEmployee(id:number){
    return this.http.delete(environment.baseURL+'/employee'+id);
  }
}
