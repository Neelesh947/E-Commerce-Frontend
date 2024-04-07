import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Use styleUrls instead of styleUrl
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn = false;
  isAdminLoggedIn = false;
  isCustomerLoggedIn = false;
  userRoles: string[] = [];

  constructor(public login: LoginService, private router: Router) {}
  
  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();    
    this.login.getCurrentUser().subscribe((users: any) => {
      this.userRoles = users.role || []; // Handle case where roles may be undefined
      this.isAdminLoggedIn = this.userRoles.includes('ADMIN');
      this.isCustomerLoggedIn = this.userRoles.includes('CUSTOMER');
    });
  }

  public logout(): void {
    this.login.logout();
    this.router.navigateByUrl('trackOrder'); // Navigate to the login page
    window.location.reload(); // Reloading the page may not be necessary, consider alternative methods
  }  
}
