import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router : Router) { }

  signUpUser(email : string,password:string){
  firebase.auth().createUserWithEmailAndPassword(email,password)
  .catch(
    error => {
      console.log(error);
    }
  );
  }
  signinUser(email : string,password:string){
     firebase.auth().signInWithEmailAndPassword(email,password)
     .then(
        resopnse => {
          firebase.auth().currentUser.getIdToken()
          .then(
            (myToken : string) => {
              this.token = myToken;
              this.router.navigate(['/']);
            }
          );
        }
     )
     .catch(
       error => {
         console.log(error);
       }
     );
  }
 
  getToken(){
    firebase.auth().currentUser.getIdToken()
    .then(
      (myToken : string) => {
        this.token = myToken;
      }
    );

    return this.token;
  }

  isAuthenitcated() : boolean{
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
