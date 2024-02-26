import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const basicUrl="http://localhost:8081";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public addCategory(category:any)
  {
    return this.http.post(`${basicUrl}/category/`,category);
  }

  //load all the categories
  public getAllCategory()
  {
    return this.http.get(`${basicUrl}/category/`);
  }
  
  //add products
  public addProducts(product:any)
  {
    return this.http.post(`${basicUrl}/product/`,product);
  }

  //get all products
  public getAllProducts()
  {
    return this.http.get(`${basicUrl}/product/`);
  }
}
