import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { catchError, mergeMap } from 'rxjs';

const basicUrl="http://localhost:8081";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient, private login : LoginService) { }

  //get all products
  public getAllProducts()
  {
    return this.http.get(`${basicUrl}/product/`);
  }

  //get products by name
  public getProductsByName(name:any)
  {
    return this.http.get(`${basicUrl}/product/search/${name}`)
  }

  //add to cart
  public addToCart(productId:any)
  {   
    return this.http.post(`${basicUrl}/cart/`,productId);
  }

  //get cart list from the current users
  public getTheCartItemsList() {
    return this.login.getCurrentUser().pipe(
      mergeMap((data: any) => {
        this.login.setUser(data);
        const userId: string[] = data.id;
        return this.http.get(`${basicUrl}/cart/${userId}`).pipe(
          catchError((error) => {
            console.error('Error in getTheCartItemsList:', error);
            throw error;
          }))
      })
    );
  }
}
