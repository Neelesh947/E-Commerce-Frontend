import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import Swal from 'sweetalert2';
import { LoginService } from '../../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{
  
  constructor(private customer:CustomerService, private login:LoginService, private snack:MatSnackBar){}
  
  ngOnInit(): void {
    this.getAllProducts();
  }

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

  getAllProducts(){
    this.products=[  ];
    this.customer.getAllProducts().subscribe((data:any)=>{
      data.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,' + element.byteImg; 
        this.products.push(element);
      });
    })
  }

  searchProducts(){
    this.products=[  ];
    this.customer.getProductsByName(this.searchProduct).subscribe((data:any)=>{
      data.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,' + element.byteImg; 
        this.products.push(element);
      });
    })
  }

  addtoCart(productId:any){

    this.login.getCurrentUser().subscribe((data:any)=>{
      this.login.setUser(data);
      //console.log(data);

      const userId: string[] = data.id;
      //console.log(userId)

      const cartdto={
        userId: userId,
        productId: productId
      }

      this.customer.addToCart(cartdto).subscribe((data:any)=>{
        // Check if the response status is CREATED (201)
          this.snack.open("Added to cart", "ok", { duration: 3000 });        
      },(error)=>{
        if (error.status === 409) {
          // Conflict status (product already in the cart)
          this.snack.open("Already added to cart", "ok", { duration: 3000 });
        } else {
          // Handle other error scenarios
          Swal.fire('Error', "Something went wrong", 'error');
        }
      })
    })

  }

}
