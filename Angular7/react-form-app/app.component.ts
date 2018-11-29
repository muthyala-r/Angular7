import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  genders= ['Male','Female'];
  singnupForm : FormGroup;

  onSubmit(){
    console.log(this.singnupForm)
  }
  ngOnInit(): void {
   this.singnupForm = new FormGroup({
     'userData' : new FormGroup({
       'username' : new FormControl('Mark',Validators.required),
       'email' : new FormControl(null,[Validators.required,Validators.email])
     }),
      'genderName' : new FormControl('Male'),
      'hobbies' : new FormArray([])
   })
  }

  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.singnupForm.get('hobbies')).push(control);
 
  }
}
