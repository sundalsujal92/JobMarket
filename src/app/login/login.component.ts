import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from 'firebase/auth'; // Import User type from firebase/auth
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import AngularFireAuth
import firebase from 'firebase/compat/app'; // Import Firebase
import { Observable } from 'rxjs'; // Import Observable from rxjs
import 'firebase/compat/auth'; // Import Firebase Auth
import { environment } from 'environment/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Property to hold error messages

  constructor(private authService: AuthService, private router: Router) { }

  // Login method called when the user submits the form
  logIn() {
    // Using the login method from AuthService
    // Using the login method from AuthService
    this.authService['login'](this.email, this.password)
      .then(() => {
        this.router.navigate(['/dashboard']); // Navigate to the dashboard on successful login
        this.errorMessage = ''; // Reset error message on successful login
      })
      .catch((error: any) => {
        this.errorMessage = 'Login failed: ' + error.message; // Display error message if login fails
      });
  }
}
