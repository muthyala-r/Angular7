import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   userName : {name : string}
   isLoggedIn  = false
   userdata : string
  constructor(private userService:UserService
              ,private dataService : DataService) { }

  ngOnInit() {
    this.userName = this.userService.user
     this.dataService.getDetails()
    .then((data:string)=>this.userdata = data)
  }

  login(){
    this.isLoggedIn =  !this.isLoggedIn
     
  }
  
  logout(){
    this.isLoggedIn =  !this.isLoggedIn
  }
}
