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

  //get coupons/apply coupons
  public applyCoupon(code:any)
  {
    return this.login.getCurrentUser().pipe(
      mergeMap((data: any) => {
        this.login.setUser(data);
        const userId: string[] = data.id;
        return this.http.get(`${basicUrl}/cart/coupon/${userId}/${code}`).pipe(
          catchError((error) => {
            console.error('Error in getTheCartItemsList:', error);
            throw error;
          }))
      })
    );
  }

  //increase product quantity 
  public increaseProductQuantity(productId:any)
  {
    return this.login.getCurrentUser().pipe(
      mergeMap((data: any) => {
        this.login.setUser(data);
        const userId: string[] = data.id;
        const cartDto={
          productId:productId,
          userId:userId
        }        
        return this.http.post(`${basicUrl}/cart/addQuantity`,cartDto).pipe(
          catchError((error) => {
            console.error('Error in getTheCartItemsList:', error);
            throw error;
          }))
      })
    );
  }

  //increase product quantity 
  public decreaseProductQuantity(productId:any)
  {
    return this.login.getCurrentUser().pipe(
      mergeMap((data: any) => {
        this.login.setUser(data);
        const userId: string[] = data.id;
        const cartDto={
          productId:productId,
          userId:userId
        }        
        return this.http.post(`${basicUrl}/cart/decreaseQuantity`,cartDto).pipe(
          catchError((error) => {
            console.error('Error in getTheCartItemsList:', error);
            throw error;
          }))
      })
    );    
  }

  //get coupons/apply coupons
  public placeOrder(orderDto:any)
  {
    return this.login.getCurrentUser().pipe(
      mergeMap((data: any) => {
        this.login.setUser(data);
        orderDto.userId = data.id;
        return this.http.post(`${basicUrl}/cart/place-order/`,orderDto).pipe(
          catchError((error) => {
            console.error('Error in getTheCartItemsList:', error);
            throw error;
          }))
      })
    );
  }

    //get the order for the customer/ user
   public getOrdersByUserId()
   {
     return this.login.getCurrentUser().pipe(
       mergeMap((data: any) => {
         this.login.setUser(data);
         const userId: string[] = data.id;
         return this.http.get(`${basicUrl}/cart/myOrders/${userId}`).pipe(
           catchError((error) => {
             console.error('Error in getTheCartItemsList:', error);
             throw error;
           }))
       })
     );
   }

   public getOrderedProduct( orderId:any)
   {
    return this.http.get(`${basicUrl}/review/order-product/${orderId}`)
   }

   public giveReview(ReviewDto:any)
   {
      return this.http.post(`${basicUrl}/review/giveReview`,ReviewDto)
   }

   public getProductDetailsById(productId:any)
   {
      return this.http.get(`${basicUrl}/product/details/${productId}`);
   }

   public addProductToWishList(wishListDto:any)
   {
      return this.http.post(`${basicUrl}/wishlist`,wishListDto)
   }

   public getListOfWishList(userId:any)
   {
      return this.http.get(`${basicUrl}/wishlist/${userId}`);
   }
}
