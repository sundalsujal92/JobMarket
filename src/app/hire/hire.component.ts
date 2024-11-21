import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  // Form data
  hireData = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  // Method to handle form submission
  onSubmit(): void {
    if (this.hireData.name && this.hireData.email && this.hireData.message) {
      alert('Thank you for your interest! Your message has been submitted.');
      this.hireData = { name: '', email: '', message: '' }; // Reset form after submission
    } else {
      alert('Please fill out all fields.');
    }
  }
}
