import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { AppComponent } from './app.component';
import { ProductsComponent } from './shopping/products/products.component';
import { ShoppingCartComponent } from './shopping/shopping-cart/shopping-cart.component';
import { ShoppingCartSummaryComponent } from './shopping/shopping-cart-summary/shopping-cart-summary.component';
import { CheckOutComponent } from './shopping/check-out/check-out.component';
import { ShoppingFormComponent } from './shopping/shopping-form/shopping-form.component';
import { MyOrdersComponent } from './shopping/my-orders/my-orders.component';
import { OrderSuccessComponent } from './shopping/order-success/order-success.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { ProductQuantityComponent } from './shared/product-quantity/product-quantity.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ProductService } from './shared/services/product.service';
import { CategoryService } from './shared/services/category.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    CheckOutComponent,
    ShoppingFormComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductQuantityComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ProductService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
