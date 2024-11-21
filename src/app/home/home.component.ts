import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  location: string = '';  // Location input field for job search
  jobTitle: string = '';  // Job title input field for job search
  errorMessage: string = '';  // Error message to show if inputs are empty

  // Search function triggered on form submission
  searchJobs(): void {
    if (this.location && this.jobTitle) {
      // Here you can replace with actual job search logic or API call
      console.log(`Searching for jobs in ${this.location} with title ${this.jobTitle}`);
      this.errorMessage = '';  // Clear any previous error message
    } else {
      this.errorMessage = 'Both location and job title are required to search.';
    }
  }
}
