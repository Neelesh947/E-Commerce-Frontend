import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{


  category={
    name:'',
    description:''
  }

  ngOnInit(): void {
    
  }

  constructor(private fb:FormBuilder, private router:Router, 
    private snack:MatSnackBar, private admin:AdminService){}

  formSubmit()
  {
    if(this.category.name.trim()=='' || this.category.name==null)
    {
      this.snack.open("Name required !!",'ok',{duration:3000});
      return;
    }
    else if(this.category.description.trim()=='' || this.category.description==null)
    {
      this.snack.open("Description required !!",'ok',{duration:3000});
      return;
    }

    this.admin.addCategory(this.category).subscribe((data:any)=>{
        this.category.name='';
        this.category.description='';
        Swal.fire("success!!" , 'category is added successfully', 'success').then((e)=>{
          this.router.navigate(['/admin/dashboard'])
        });
    },
    (error)=>{
      console.log('error');
        Swal.fire("Error","server error ","error");
    })
  }
}
