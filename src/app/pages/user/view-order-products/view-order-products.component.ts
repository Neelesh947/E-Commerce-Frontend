import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-view-order-products',
  templateUrl: './view-order-products.component.html',
  styleUrl: './view-order-products.component.css'
})
export class ViewOrderProductsComponent implements OnInit {

  orderId:any=this.routes.snapshot.params['orderId'];

  orderedProductDetailsList:any[]=[];
  totalAmount:any;

  constructor(private routes:ActivatedRoute,
      private customer:CustomerService){}

  ngOnInit(): void {
    this.getorderedProductDetailsByOrderId();
  }

  getorderedProductDetailsByOrderId(){
    this.customer.getOrderedProduct(this.orderId).subscribe((data: any) => {
      data.productDtoList.forEach((element: any) => { 
        element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
        this.orderedProductDetailsList.push(element);
      });
      this.totalAmount=data.orderAmount;
    });
  }

}
