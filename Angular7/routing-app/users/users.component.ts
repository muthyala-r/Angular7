import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users  = [
     {
       id:1,name:'Mr.Sundar'
     },
     {
      id:2,name:'Mr.Muthyala'
    },
    {
      id:3,name:'Mr.Ram'
    },
   ]
  constructor() { }

  ngOnInit() {
  }

}
