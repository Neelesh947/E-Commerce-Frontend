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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,MatToolbarModule,
    MatMenuModule,MatCardModule,
    MatFormFieldModule,MatButtonModule,
    FormsModule,MatInputModule,MatSnackBarModule,
    HttpClientModule,MatSelectModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }