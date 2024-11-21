import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';  // Ensure the correct import path
import { Router } from '@angular/router';
import firebase from 'firebase/app';  // Correct Firebase import if needed
import 'firebase/auth';  // Import Firebase Auth if needed
import { User } from 'firebase/auth';  // Import User type from firebase/auth

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: User | null = null;  // Type the user as User or null

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // Get the current user and subscribe to the auth state
    this.authService.getUser().subscribe((user: User | null) => {
      this.user = user;  // Assign the user object
      if (!this.user) {
        this.router.navigate(['/login']);  // Redirect to login page if no user is logged in
      }
    });
  }

  // Method to get user display name or return 'Guest' if not available
  get userDisplayName(): string {
    return this.user?.displayName ?? 'Guest';  // Fallback to 'Guest' if displayName is null
  }

  // Logout method
  logOut(): void {
    this.authService.logOut().then(() => {
      this.router.navigate(['/login']);  // Navigate to login page after successful logout
    }).catch((error: Error) => {  // Catch any error during logout
      alert('Logout failed: ' + error.message);  // Show error message if logout fails
    });
  }
}
