import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get<any>('http://localhost:8800/api/user');
  }
  saveUser(data:any){
    return this.http.post<any>('http://localhost:8800/api/auth/signup',data);
  }

  getUser(id:any){
    return this.http.get<any>(`http://localhost:8800/api/user/${id}`);
  }
  updateUser(data:any,id:any){
    return this.http.patch<any>(`http://localhost:8800/api/user/${id}`,data);
  }
  deleteUser(id:any){
    return this.http.delete<any>(`http://localhost:8800/api/user/${id}`);
  }

  //http://localhost:8800/api/user/63cbe921b035f3be1de91377
}
