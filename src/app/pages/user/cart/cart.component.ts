import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlaceOrderComponent } from '../place-order/place-order.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] // <-- Fix the typo here, change styleUrl to styleUrls
})
export class CartComponent implements OnInit{

  constructor(private customer: CustomerService, private snack: MatSnackBar,
     private dialog: MatDialog, private login: LoginService, private fb:FormBuilder) {}

  CartItem:any = [];
  order: any;

  couponForm!:FormGroup 

  ngOnInit(): void {  
      this.couponForm=this.fb.group({
        code:[null,[Validators.required]]
      })
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

  applyCoupon(){
    this.customer.applyCoupon(this.couponForm.get(['code'])!.value).subscribe(res=>{
      this.snack.open("coupon applied succeessfully","ok");
      this.getCart();
    },(error)=>{
      this.snack.open("something went wrong","ok");
    })
  }

  increaseQuantity(productId:any)
  {
    this.customer.increaseProductQuantity(productId).subscribe((data)=>{
      this.snack.open("Product quantity increased","close",{duration:3000});
      this.getCart();
    })
  }

  decreaseQuantity(productId:any)
  {
    this.customer.decreaseProductQuantity(productId).subscribe((data)=>{
      this.snack.open("Product quantity decreased","close",{duration:3000});
      this.getCart();
    })
  }

  placeOrder(){
    this.dialog.open(PlaceOrderComponent);
  }
}
