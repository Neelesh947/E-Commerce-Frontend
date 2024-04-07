import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-post-coupon',
  templateUrl: './post-coupon.component.html',
  styleUrl: './post-coupon.component.css'
})
export class PostCouponComponent implements OnInit{

  constructor(private admin:AdminService, 
        private router:Router, 
        private datePipe:DatePipe,
        private snackbar:MatSnackBar){}

  coupon:any={};

  formatExpiryDate(selectedDate: Date): string {
    return this.datePipe.transform(selectedDate, 'yyyy-MM-dd') || '';
  }

  ngOnInit(): void {
  }

  postCoupons(){

    if (!this.coupon.name || this.coupon.name.trim() === '') {
      this.snackbar.open("Name is required !!", 'ok', { duration: 3000 });
      return;
    }

    if (!this.coupon.code || this.coupon.code.trim() === '') {
      this.snackbar.open("Code is required !!", 'ok', { duration: 3000 });
      return;
    }

    if (!this.coupon.discount || this.coupon.discount.trim() === '') {
      this.snackbar.open("Discount is required !!", 'ok', { duration: 3000 });
      return;
    }

    if (!this.coupon.expirationDate ) {
      this.snackbar.open("Expiration Date is required !!", 'ok', { duration: 3000 });
      return;
    }

    this.admin.createCoupons(this.coupon).subscribe((data:any)=>{
      this.snackbar.open('Coupon Posted Successfully!','Close',{
        duration:5000
      });
      this.router.navigateByUrl('/admin/dashboard');      
    },(error)=>{
      this.snackbar.open('Coupon code already exists','Close',{
        duration:5000
      })
    })
  }
}
