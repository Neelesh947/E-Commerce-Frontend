import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.css']
})
export class MyOrderComponent implements OnInit{

  myOrders:any;

  constructor(private cusomer:CustomerService){}

  ngOnInit(): void {
    this.getMyOrders();
  }

  getMyOrders()
  {
    this.cusomer.getOrdersByUserId().subscribe((data:any)=>{
      this.myOrders=data;
    })
  }

}
