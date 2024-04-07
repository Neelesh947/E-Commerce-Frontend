import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-vie-product-details',
  templateUrl: './vie-product-details.component.html',
  styleUrl: './vie-product-details.component.css'
})
export class VieProductDetailsComponent implements OnInit{

  productId:any=this.route.snapshot.params['productId'];

  userDataString = localStorage.getItem('user');
  userData = this.userDataString ? JSON.parse(this.userDataString) : null;
  userId = this.userData ? this.userData.id : null;

  product:any;
  FAQs:any[]=[];
  review:any[]=[];

  constructor(private customer:CustomerService,
    private login:LoginService,
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

  addProductToWishList(){
    const wishListDto={
      productId: this.productId,
      userId: this.userId
    }

    this.customer.addProductToWishList(wishListDto).subscribe((data:any)=>{
      console.log(data);
      if(data.id!=null)
      {
        this.snack.open("Product Added to wish list successfully", "ok", {duration:3000})
      }
      else
      {
        this.snack.open("Product is already in wishlist", "ok", {duration:3000})
      }
    })
  }
}
