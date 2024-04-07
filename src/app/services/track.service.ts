import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http:HttpClient) { }

  public getOrderByTrackingId(trackingId:any)
   {
      return this.http.get(`http://localhost:8081/cart/order/${trackingId}`)
   }
}
