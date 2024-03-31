import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vie-product-details',
  templateUrl: './vie-product-details.component.html',
  styleUrl: './vie-product-details.component.css'
})
export class VieProductDetailsComponent implements OnInit{

  productId:any=this.route.snapshot.params['productId'];

  product:any;
  FAQs:any[]=[];
  review:any[]=[];

  constructor(private customer:CustomerService,
        private snack:MatSnackBar,
        private route:ActivatedRoute){}

  ngOnInit(): void {
    this.getProductsDetailsById()
  }

  getProductsDetailsById(){
    this.customer.getProductDetailsById(this.productId).subscribe((data:any)=>{
      this.product=data.productDto;

      this.product.processedImg='data:image/png;base64,'+ data.productDto.byteImg;
      this.FAQs=data.faQdtos;

      data.reviewDtos.forEach((element: any)=>{
        element.processedImg='data:image/png;base64,'+ element.returnedImg;
        this.review.push(element)
      });
    })
  }
}
