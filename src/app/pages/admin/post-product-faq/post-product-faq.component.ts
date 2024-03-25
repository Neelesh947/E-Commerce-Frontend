import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-product-faq',
  templateUrl: './post-product-faq.component.html',
  styleUrl: './post-product-faq.component.css'
})
export class PostProductFAQComponent implements OnInit{

  productId:any=this.activated.snapshot.params['productId'];

  FAQForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private router:Router,
    private admin:AdminService,
    private snack:MatSnackBar,
    private activated:ActivatedRoute

    ){}

  ngOnInit(): void {
    this.FAQForm=this.fb.group({
      question:[null,[Validators.required]],
      answer:[null,[Validators.required]],
    })
  }

  postFAQ(){
    this.admin.postFAQ(this.productId, this.FAQForm.value).subscribe((data:any)=>{
      if(data.id!=null)
      {
        this.snack.open("FAQ posted successfully","ok",{duration:3000})
        this.router.navigateByUrl ('/admin/dashboard');
      }
      else{
        Swal.fire("Error","Something went wrong",'error');
      }
    })
  }

}
