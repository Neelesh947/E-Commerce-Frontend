import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrackService } from '../../../services/track.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.css'
})
export class TrackOrderComponent implements OnInit{

  searchOrderForm!:FormGroup;
  order:any;

  constructor(private fb:FormBuilder,
        private track:TrackService
        ){}

  ngOnInit(): void {
    this.searchOrderForm=this.fb.group({
      trackingId:[null,[Validators.required]]
    })
  }

  submitForm(){
    this.track.getOrderByTrackingId(this.searchOrderForm.get('trackingId')?.value).subscribe((data:any)=>{
      console.log(data)
      this.order=data;
    })
  }
}
