import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allowNewUser = false;
  userStatus = 'No user created';
  userName = 'None';
  userCreated :boolean = false;
  users =['user1','user2','user3']
  constructor() { 
    setTimeout(()=>{
      this.allowNewUser =  true;
    },2000)
  }

  ngOnInit() {
  }
  onClick(){
    this.userStatus = 'New User status'+this.userName;
    this.userCreated = !this.userCreated;
  }

  onUpdateUserName(event: Event){
      this.userName = (<HTMLInputElement>event.target).value;
      console.log(event);
  }

  
}
