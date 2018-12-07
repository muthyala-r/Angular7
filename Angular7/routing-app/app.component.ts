import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public authService : AuthService
              ,private router: Router,
              public dataService : DataStorageService){

  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDY6ldFVNzVcaDGR24HI6BshBbZsR1SOek",
      authDomain: "ng-http-module-18738.firebaseapp.com"
    })
 
  }
  onSaveData(){
     this.dataService.storeServer()
     .subscribe(
       (response :Response) => {
         console.log(response);
       },
       (error) => {console.log(error)}
     );
  }
  onFetchData(){
    this.dataService.getServers();
  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
 
}
