import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl="http://localhost:8081"

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  //add users
  public addUser(user:any)
  {
    return this.http.post(`${baseUrl}/user/`,user);
  }
}
