import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  
  constructor(private admin:AdminService){}

  products=[
    {
      productId:'',
      name:'',
      description:'',
      price:'',
      img:'',
      processedImg:'',
      byteImg:'',
      categroyName:''
    }
  ]

  searchProduct='';
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.products=[ ];
    this.admin.getAllProducts().subscribe((data:any)=>{
      console.log(data)
      data.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,' + element.byteImg; 
        this.products.push(element);
      });
    })
  }

  searchProducts(){
    this.products=[  ];
    this.admin.getProductsByName(this.searchProduct).subscribe((data:any)=>{
      data.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,' + element.byteImg; 
        this.products.push(element);
      });
    })
  }

  deleteProducts(productId:any){
    this.admin.deleteProducts(productId).subscribe((data:any)=>{
      if(data==null)
      {
        Swal.fire("Success","Product Deleted Successfully",'success');
        this.getAllProducts();
      }
      else
      {
        Swal.fire("Error", data.message,'error');
      }
    })
  }
}
