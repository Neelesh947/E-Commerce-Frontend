import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-view-wish-list',
  templateUrl: './view-wish-list.component.html',
  styleUrl: './view-wish-list.component.css'
})
export class ViewWishListComponent implements OnInit{

  products:any[]=[];
  userDataString = localStorage.getItem('user');
  userData = this.userDataString ? JSON.parse(this.userDataString) : null;
  userId = this.userData ? this.userData.id : null;
  
  constructor(private customer:CustomerService){}

  ngOnInit(): void {
    this.getWishListByUserId()
  }

  getWishListByUserId(){
    this.customer.getListOfWishList(this.userId).subscribe((data:any)=>{
      console.log(data)
      data.forEach((element:any)=>{
        element.processedImg='data:image/jpeg;base64,'+element.returnedImg;
        this.products.push(element);
      })
    })
  }
}
