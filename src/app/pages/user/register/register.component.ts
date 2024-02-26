import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../services/register.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  
  hide=true

  constructor(private register:RegisterService){}

  ngOnInit(): void {
  }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
    role:'CUSTOMER'
  }

  formSubmit(){
    //addUser ko bind kr denge Which comes from userService
    this.register.addUser(this.user).subscribe((data:any)=>{
      //success
      console.log(data);
      swal.fire('Success','User id for '+data.firstname+' successfully registered','success');
    },(error)=>{
      //error
      console.log(error);
      //alert('something went wrong');
      //apply here sweet form
      swal.fire('SomeThing went Wrong!!');
    })
  }
}
