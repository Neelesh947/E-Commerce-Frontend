import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.css'
})
export class CouponComponent implements OnInit{

  coupon:any;

  constructor(private admin:AdminService){}

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons(){
    this.admin.getCoupons().subscribe((data:any)=>{

      this.coupon=data;
      //console.log(data)

    },(error)=>{
      Swal.fire("Error","Unable to fetch Coupons data",'error');
    })
  }
}
