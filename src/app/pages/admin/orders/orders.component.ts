import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit{

  order:any;

  constructor(private admin:AdminService,
      private snack:MatSnackBar){}

  ngOnInit(): void {
    this.getPlacedOrders();
  }

  getPlacedOrders(){
    this.admin.getPlacedOrders().subscribe((data)=>{
      this.order=data;
    })
  }

  changeOrderStatus(orderId:any, status:string)
  {
    this.admin.changeOrderStatus(orderId,status).subscribe((data:any)=>{
      if(data.orderId != null)
      {
        this.snack.open("Order Status changed successfully",'close',{duration:3000});
        this.getPlacedOrders();
      }
      else
      {
        Swal.fire("Error","Something went wrong","error");
      }
    })
  }
}
