import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  loginData={
    username:'',
    password:''
  }

  constructor(private snack:MatSnackBar, private login:LoginService, private router:Router){}

  ngOnInit(): void {
  }

  hide=true;

  formSubmit(){
    //console.log("button is clicked")

    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
      this.snack.open('username is required !!','ok',{
        duration:3000, 
        verticalPosition: 'top',
      })
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      this.snack.open('password is required !!','ok',{
        duration:3000, 
        verticalPosition: 'top',
      })
      return;
    }

    this.login.generateTokens(this.loginData).subscribe((data:any)=>{
      console.log(data);

      this.login.loginUser(data.token);

      this.login.getCurrentUser().subscribe(
        (user:any)=>{
          this.login.setUser(user);
          console.log(user);
            const userRoles: string[] = user.role;
            // Check if the user has the 'admin' role
            if (userRoles.includes('ADMIN')) {
              // Perform actions for admin user
              //console.log('User is an admin.');

              //admin dashboard
             // window.location.href='/admin'
             this.router.navigate(['admin']);
             this.login.loginStatusSubject.next(true);

            } 
            else if(userRoles.includes('CUSTOMER')) {
              // Perform actions for normal user
              //console.log('User is a normal user.');
              // normal user dashboard
              // window.location.href='/user-dashboard'
              this.router.navigate(['user-dashboard']);
              this.login.loginStatusSubject.next(true);
            }
            else
            {
              this.login.logout();
              location.reload();
            }
        })

    },(error:any)=>{
      this.snack.open("INVALID DETAILS !!    TRY AGAIN","OK",{
        duration: 3000
      });
    })

  } 
}