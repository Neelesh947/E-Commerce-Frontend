import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../../services/customer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent implements OnInit{

  orderForm!:FormGroup;

  constructor(private snack:MatSnackBar, 
    private fb:FormBuilder,
    private customer:CustomerService, 
    private router:Router,
    private dialog:MatDialog){}

  ngOnInit(): void {
    this.orderForm=this.fb.group({
      address:[null,[Validators.required]],
      orderDescription:[null],
    })
  }

  placeOrder(){
    this.customer.placeOrder(this.orderForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.orderId!=null)
      {
        Swal.fire("Success","Order placed successfully","success");
        this.router.navigateByUrl("/user-dashboard/my-order");
        this.closeForm();
      }else{
        Swal.fire("Error","Someting went wrong","error");
      }
    })
  }

  closeForm(){
    this.dialog.closeAll();
  }
}
