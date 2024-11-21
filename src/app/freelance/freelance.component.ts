import { Component } from '@angular/core';

@Component({
  selector: 'app-freelance',
  templateUrl: './freelance.component.html',
  styleUrls: ['./freelance.component.css']
})
export class FreelanceComponent {
  freelancerInfo = {
    name: 'Sujal Kumar',
    profession: 'Full Stack Developer',
    description: 'Experienced in web and mobile development. Passionate about creating scalable, efficient, and beautiful web applications.',
    profilePicture: 'assets/logo.jpg', // Profile picture
    contact: {
      email: 'sundalsujal925@gmail.com',
      phone: '+91 6284902591',
      linkedin: 'https://www.linkedin.com/in/sujal-kumar-',
      github: 'https://github.com/sundalsujal92'
    },
    services: [
      { 
        name: 'Web Development', 
        description: 'Building modern, responsive websites using Angular, React, and Vue.',
        icon: 'assets/web.jpg' // Icon for Web Development service
      },
      { 
        name: 'Mobile Development', 
        description: 'Creating cross-platform mobile apps using React Native.',
        icon: 'assets/Mobile.jpg' // Icon for Mobile Development service
      },
      { 
        name: 'Consultation', 
        description: 'Providing expert advice and consultation for your development projects.',
        icon: 'assets/advice.jpg' // Icon for Consultation service
      }
    ]
  };
}
