import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { LoginComponent } from "./core/login/login.component";
import { ShoppingCartComponent } from "./shopping/shopping-cart/shopping-cart.component";

const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'',component: HomeComponent},
    {path:'home',component: HomeComponent},
    {path:'signin',component: LoginComponent},
    {path:'shopping-cart',component: ShoppingCartComponent},
    /* {path:'',component:},
    {path:'',component:},
    {path:'',component:},
    {path:'',component:}, */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}