import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-review-ordered-product',
  templateUrl: './review-ordered-product.component.html',
  styleUrl: './review-ordered-product.component.css'
})
export class ReviewOrderedProductComponent implements OnInit{

  productId:any= this.activedRoutes.snapshot.params['productId'];
  
  userDataString = localStorage.getItem('user');
  userData = this.userDataString ? JSON.parse(this.userDataString) : null;
  userId = this.userData ? this.userData.id : null;

  
  reviewForm!: FormGroup;
  selectedFile: File | null |undefined;
  imagePreview:string | ArrayBuffer | null | undefined;
  

  constructor(private fb:FormBuilder,
      private snack:MatSnackBar,
      private customer:CustomerService,
      private router:Router,
      private activedRoutes: ActivatedRoute,
      private login:LoginService
      ){}

  ngOnInit(): void {
    this.reviewForm=this.fb.group({
      rating:[null,[Validators.required]],
      description:[null,[Validators.required]],
    })
  }

  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
    this.previewImage();
  }
  previewImage(){
    if (!this.selectedFile) return; // Ensure selectedFile is not null
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  submitForm(){

    if (!this.selectedFile) {
      this.snack.open("Please select an image", 'ok', { duration: 3000 });
      return;
    }
    
    const formData: FormData=new FormData;
    formData.append('img', this.selectedFile)
    formData.append('productId', this.productId.toString())
    formData.append('userId', this.userId ? this.userId.toString() : '')
    formData.append('rating', this.reviewForm.get('rating')?.value)
    formData.append('description', this.reviewForm.get('description')?.value)

    this.customer.giveReview(formData).subscribe((data:any)=>{
      if(data.reviewId!=null)
      {
        this.snack.open("Review posted successfully",'ok',{duration:3000})
        this.router.navigateByUrl('/user-dashboard/my-order')
      }else{
        this.snack.open("Something went wrong","ok",{duration:3000})
      }      
    })
  }
}
