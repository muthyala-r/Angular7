import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseApp } from '@angular/fire';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ : Observable<firebase.User>; 
  constructor(private afAuth:AngularFireAuth) { 
    this.user$ = afAuth.authState;
  }
  login(){
   this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()) 
  }
  logout(){
    this.afAuth.auth.signOut();
  }
}
