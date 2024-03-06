import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // <-- Fix the typo here, change styleUrl to styleUrls
})
export class CartComponent implements OnInit{

  constructor(private customer: CustomerService, private snack: MatSnackBar,
     private dialog: MatDialog, private login: LoginService) {}

  CartItem:any = [];
  order: any;

  ngOnInit(): void {    
    this.getCart();
  }

  getCart() {
    this.CartItem = [];
    this.customer.getTheCartItemsList().subscribe((res: any) => {
      this.order = res;
      res.cartItemsDto.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,'+element.returnedImg;
        this.CartItem.push(element);
      });
    });
  }
}
