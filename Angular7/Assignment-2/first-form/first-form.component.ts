import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {
   
   userName : string = '';
  constructor() { }

  ngOnInit() {
  }
   
  getUserName(){
    return this.userName;
  }

  onClick(event : Event){
    
     this.userName = '';

     console.log(event);
  }

}
