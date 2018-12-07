import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ServersService } from './servers/servers.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthInterceptor } from './auth/auth-intercepter';
import { AnimationComponent } from './animation/animation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
//localhost:4200
//localhost:4200/servers
//localhost:4200/users
//{path:'users',component : UsersComponent},
/* const routes : Routes =[
  {path:'',component : HomeComponent},
  {path:'servers',component : ServersComponent,
  children :[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent}
  ]}, 
  {path:'users',component : UsersComponent,children :[{path:':id/:name',component :UserComponent}]}
  
]; */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UsersComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    SigninComponent,
    SignupComponent,
    DropdownDirective,
    AnimationComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard,AuthService,ServersService,
  DataStorageService,
  {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
