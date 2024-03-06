import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const baseUrl="http://localhost:8081"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();
  
  constructor(private http:HttpClient) { }

  //current-user: user which is logged in
  public getCurrentUser()
  {
    const token=this.getToken();
    const headers = {
      Authorization: `Bearer ${token}`
    };
    return this.http.get(`${baseUrl}/current-user`,{headers});
  }

  //generate-tokens
  public generateTokens(loginData:any)
  {
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //login user: set token in local storage
  public loginUser(token: string)
  {
    localStorage.setItem('token',token);
    return true;
  } 

  //isLogin: user is logged in or not
  public isLoggedIn()
  {
    let tokenStr=localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  //logout : remove token from local storage
  public logout()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token from the localStorage
  public getToken()
  {
    return localStorage.getItem("token");
  }
  
  //set user details
  public setUser(user: any)
  {
    localStorage.setItem("user", JSON.stringify(user));
  }

  //get user 
  public getUser()
  {
    let userStr=localStorage.getItem("user");

    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else
    {
      this.logout();
      return null;
    }
  }

  //get userId
  public getUserId(){
    const user= this.getUser();
    if(user==null)
    {
      return '';
    }
    return user.userId;
  }

}
