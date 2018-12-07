import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {UesrListComponent} from './uesr-list/uesr-list.component'
import { AppComponent } from './app.component';
import { ReversePipe } from './shared/reverse.pipe';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { UsersComponent } from './users/users.component';
const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'user',children:[
    {path:'',redirectTo:'list',pathMatch:'full'},
    {path:'list',component:UesrListComponent,children:[
    {path:'detail/:name',component:UsersComponent}
  ]}
]}
]
@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    UsersComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    UesrListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
