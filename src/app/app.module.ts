import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './component/navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { AregisterComponent } from './pages/admin/aregister/aregister.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http';
import { AnalyticsComponent } from './pages/admin/analytics/analytics.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { PostcouponsComponent } from './pages/admin/postcoupons/postcoupons.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import { CustomerhomeComponent } from './pages/user/customerhome/customerhome.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { CartComponent } from './pages/user/cart/cart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CouponComponent } from './pages/admin/coupon/coupon.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PostCouponComponent } from './pages/admin/post-coupon/post-coupon.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { UcouponComponent } from './pages/user/ucoupon/ucoupon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaceOrderComponent } from './pages/user/place-order/place-order.component';
import { MyOrderComponent } from './pages/user/my-order/my-order.component';
import { PostProductFAQComponent } from './pages/admin/post-product-faq/post-product-faq.component';
import { UpdateProductComponent } from './pages/admin/update-product/update-product.component';
import { ViewOrderProductsComponent } from './pages/user/view-order-products/view-order-products.component';
import { ReviewOrderedProductComponent } from './pages/user/review-ordered-product/review-ordered-product.component';
import { VieProductDetailsComponent } from './pages/user/vie-product-details/vie-product-details.component';
import { ViewWishListComponent } from './pages/user/view-wish-list/view-wish-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AregisterComponent,
    AdminhomeComponent,
    AnalyticsComponent,
    CategoryComponent,
    DashboardComponent,
    ProductComponent,
    OrdersComponent,
    PostcouponsComponent,
    CustomerhomeComponent,
    UserDashboardComponent,
    CartComponent,
    CouponComponent,
    PostCouponComponent,
    UcouponComponent,
    PlaceOrderComponent,
    MyOrderComponent,
    PostProductFAQComponent,
    UpdateProductComponent,
    ViewOrderProductsComponent,
    ReviewOrderedProductComponent,
    VieProductDetailsComponent,
    ViewWishListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,MatToolbarModule,
    MatMenuModule,MatCardModule,
    MatFormFieldModule,MatButtonModule,
    FormsModule,MatInputModule,MatSnackBarModule,
    HttpClientModule,MatSelectModule,
    MatDividerModule,MatDialogModule,
    MatDatepickerModule,MatTableModule,ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
