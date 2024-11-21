import { Component } from '@angular/core';
import { AuthService } from '../auth.service'; // Assuming you have a service for handling auth
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  username: string = '';
  phoneNumber: string = '';
  errorMessage: string = '';
signUp: any;

  constructor(private authService: AuthService, private router: Router) { }

  // Signup method
  signup() {
    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    // Call AuthService to sign up the user using Firebase Auth
    // Call AuthService to sign up the user using Firebase Auth
    this.authService['signup'](this.email, this.password, this.username, this.phoneNumber)
      .then(() => {
        // Redirect to login after successful signup
        this.router.navigate(['/login']);
      })
      .catch((error: any) => {
        // Handle errors
        this.errorMessage = error.message;
      });
  }
}
