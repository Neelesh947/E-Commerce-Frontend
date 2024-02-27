import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  
  constructor(private admin:AdminService){}

  products=[
    {
      name:'',
      description:'',
      price:'',
      img:'',
      processedImg:'',
      byteImg:'',
      categroyName:''
    }
  ]
  
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.products=[  ];
    this.admin.getAllProducts().subscribe((data:any)=>{
      data.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,' + element.byteImg; 
        this.products.push(element);
      });
    })
  }

}
