import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AuthGuard } from "./auth/auth.guard";
import { AnimationComponent } from "./animation/animation.component";

const routes : Routes =[
    {path:'',component : HomeComponent},
    {path:'servers',component : ServersComponent,
    canActivate : [AuthGuard],
    children :[
      {path:':id',component:ServerComponent},
      {path:':id/edit',component:EditServerComponent}
    ]}, 
    {path:'users',component : UsersComponent,
     canActivate : [AuthGuard],
     children :[{path:':id/:name',component :UserComponent}]},
     {path:'signup',component:SignupComponent},
     {path:'signin',component:SigninComponent},
     {path:'animation',component:AnimationComponent}
    
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}