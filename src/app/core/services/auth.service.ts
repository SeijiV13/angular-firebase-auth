import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user;
  constructor(public  fireAuth:  AngularFireAuth, private router: Router) {
    this.fireAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(["/home"]);
      } else {
        localStorage.setItem('user', null);
        this.router.navigate(["/login"]);
      }
    })
   }

  login(email: string, password: string): Promise<any> {
   return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string): Promise<any> {
   return  this.fireAuth.createUserWithEmailAndPassword(email, password)
  }

  loginWithGoogle(){
    return this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

  }

   logout(){
    return this.fireAuth.signOut();
  }

}
