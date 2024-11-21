import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Ensure compatibility
import { Observable } from 'rxjs';
import firebase from 'firebase/app';  // Ensure Firebase is properly imported
import { User } from 'firebase/auth';
@Injectable({
  providedIn: 'root'  // Makes this service available throughout the app
})
export class AuthService {
  [x: string]: any;

  constructor(private afAuth: AngularFireAuth) { }

  // Get the currently authenticated user
  getUser(): Observable<firebase.User | null> {
    return this.afAuth.authState;  // Returns an observable of the current user (or null)
  }

  // Log out the current user
  logOut(): Promise<void> {
    return this.afAuth.signOut();  // Returns a promise to sign the user out
  }

  // Log in the user with email and password
  logIn(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);  // Sign in using Firebase authentication
  }
}
