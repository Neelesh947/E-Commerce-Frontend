import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent implements OnInit{

  data:any;

  constructor(private admin:AdminService){}

  ngOnInit(): void {
    this.admin.getAnalytics().subscribe(res=>{
      console.log(res);

      this.data=res;
    })
  }

}
