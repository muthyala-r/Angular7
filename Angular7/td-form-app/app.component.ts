import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  @ViewChild('f') signupForm : NgForm;
  defaultQuestion = 'pet';
  answer = ''
  genders : string[] = ['Male','Female']
  user = {
    username :'',
    email : '',
    secret:'',
    question:'',
    gender:''
  }
  submitted:boolean = false;
  constructor(){

  }
  onSubmit(){
    //console.log(this.signupForm);
    this.submitted = true
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.gender = this.signupForm.value.gender;
    this.user.question = this.signupForm.value.question;
    this.signupForm.reset();
  }
  suggestUserDetails(){
    this.signupForm.setValue({
      userData :{
        username:'Max',
        email:'max@gmail'
      },
      secret:'teacher',
      question :'oops',
      gender : 'Male'
    });

   
  }
}
