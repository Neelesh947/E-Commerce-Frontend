import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent implements OnInit{

  productId=this.routes.snapshot.params['productId'];

  onFileSelected(event: any) {
    this.selectedFiles=event.target.files[0];
    this.previewImage();
  }

  constructor(private admin:AdminService, private router:Router, 
      private snack:MatSnackBar, private routes:ActivatedRoute){}

  selectedFiles: File | null=null;

  imagePreview:String | ArrayBuffer| null=null;
  existingImage:String | ArrayBuffer| null=null;

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string | ArrayBuffer;
    };

    // Check if this.selectedFiles is not null before passing it to readAsDataURL
    if (this.selectedFiles) {
      reader.readAsDataURL(this.selectedFiles);
    }
  }

  product={
    name:'',
    price:'',
    description:'',
    byteImg:'',
    category:{
      categroyId:''
    }
  }

  category=[{
    categroyId:'',
    name:'',
    description:''
  }]
  

  ngOnInit(): void {
    this.admin.getAllCategory().subscribe((data:any)=>{
      this.category=data;
      //console.log(data);
    },(error)=>{
      console.log("error")
      Swal.fire('Error!','error in loading data from server','error');
    })

    this.getProductById();
  }

  formSubmit()
  {
    if (!this.selectedFiles) {
      this.snack.open("please Select image",'ok')
      return;
    }  

    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('price', this.product.price);
    formData.append('description', this.product.description);
    formData.append('img', this.selectedFiles);
    formData.append('categroyId', this.product.category.categroyId);
  
    this.admin.addProducts(formData).subscribe(
      (result) => {     

        if(result !=null){
          Swal.fire('success',"Product is added",'success').then((e)=>{
            this.router.navigate(['/admin/dashboard'])
          });
        }
        else{
          this.snack.open("ERROR","ok")
        }

        this.selectedFiles = null; // Reset selectedFiles after successful submission
        this.imagePreview = null; // Reset imagePreview after successful submission
  
    },(error)=>{
      Swal.fire("Error",'Something Went Wrong', 'error')
    })
  }

  getProductById(){
    this.admin.getProductsById(this.productId).subscribe((data:any)=>{
      this.product=data;
      this.existingImage='data:image/jpeg;base64,'+data.byteImg;
    })
  }
}
