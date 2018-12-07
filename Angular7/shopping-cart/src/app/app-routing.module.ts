import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { LoginComponent } from "./core/login/login.component";
import { ShoppingCartComponent } from "./shopping/shopping-cart/shopping-cart.component";
import { AdminProductsComponent } from "./admin/admin-products/admin-products.component";
import { MyOrdersComponent } from "./shopping/my-orders/my-orders.component";
import { AdminOrdersComponent } from "./admin/admin-orders/admin-orders.component";
import { ProductFormComponent } from "./admin/product-form/product-form.component";

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'signin',component: LoginComponent},
    {path:'shopping-cart',component: ShoppingCartComponent},
    {path:'admin/products',component:AdminProductsComponent},
    {path:'my/orders',component:MyOrdersComponent},
    {path:'admin/orders',component:AdminOrdersComponent},
    {path:'admin/products/new',component:ProductFormComponent}
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}