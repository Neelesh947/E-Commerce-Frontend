import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { AregisterComponent } from './pages/admin/aregister/aregister.component';
import { AdminhomeComponent } from './pages/admin/adminhome/adminhome.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { CustomerhomeComponent } from './pages/user/customerhome/customerhome.component';
import { adminGuard } from './services/admin.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/admin/analytics/analytics.component';
import { ProductComponent } from './pages/admin/product/product.component';
import { OrdersComponent } from './pages/admin/orders/orders.component';
import { PostcouponsComponent } from './pages/admin/postcoupons/postcoupons.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"

  },
  {
    path:"register",
    component: RegisterComponent,
    pathMatch:"full"
  },
  {
    path:"aregister",
    component: AregisterComponent,
    pathMatch:"full"
  },
  {
    path:'admin',
    component:AdminhomeComponent,
    children:[
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'analytics',
        component:AnalyticsComponent
      },
      {
        path:'product',
        component:ProductComponent
      },
      {
        path:'orders',
        component:OrdersComponent
      },
      {
        path:'postcoupons',
        component:PostcouponsComponent
      }
    ]    
  },
  {
    path:'user-dashboard',
    component:CustomerhomeComponent,
    pathMatch:"full"
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
