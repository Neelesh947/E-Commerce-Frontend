import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  
  isLoggedIn=false;
  user=null;

  isAdminLoggedIn=false;
  isCustomerLoggedIn=false;

  constructor(public login:LoginService, private router:Router){}
  
  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    
    this.login.getCurrentUser().subscribe((users:any)=>{
      const userRoles: string[] = users.role;
      this.isAdminLoggedIn = userRoles.includes('ADMIN');
      this.isCustomerLoggedIn = userRoles.includes('CUSTOMER');
  })

  }

  public logout(){
    this.login.logout();
    this.router.navigate(['login']);
  }

}
