import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgotPasswordComponent {

  email: string = '';

  constructor(private authService: AuthService) { }

  resetPassword() {
    this.authService['resetPassword'](this.email)
      .then(() => {
        alert('Password reset email sent.');
      })
      .catch((error: any) => {
        alert('Error: ' + error.message);
      });
  }
}
