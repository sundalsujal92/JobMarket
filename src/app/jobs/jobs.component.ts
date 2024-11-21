import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  // Array of job objects
  jobs = [
    { title: 'Software Engineer', company: 'Company A', location: 'New York', description: 'Develop and maintain software applications.' },
    { title: 'Data Analyst', company: 'Company B', location: 'San Francisco', description: 'Analyze data and create reports.' },
    { title: 'Product Manager', company: 'Company C', location: 'Los Angeles', description: 'Manage product development lifecycle.' },
    { title: 'Web Developer', company: 'Company D', location: 'Chicago', description: 'Build and maintain websites.' },
    { title: 'Mobile Developer', company: 'Company E', location: 'Seattle', description: 'Develop mobile applications.' },
    { title: 'DevOps Engineer', company: 'Company F', location: 'Austin', description: 'Automate and manage infrastructure.' },
    { title: 'Cloud Architect', company: 'Company G', location: 'San Jose', description: 'Design and deploy cloud infrastructure.' },
    { title: 'UX/UI Designer', company: 'Company H', location: 'Boston', description: 'Design user interfaces and improve user experience.' },
    { title: 'Backend Developer', company: 'Company I', location: 'Miami', description: 'Develop server-side logic and databases.' },
    { title: 'Frontend Developer', company: 'Company J', location: 'Austin', description: 'Develop client-side applications.' },
    { title: 'Full Stack Developer', company: 'Company K', location: 'Denver', description: 'Develop both front-end and back-end applications.' },
    { title: 'QA Engineer', company: 'Company L', location: 'Dallas', description: 'Test software to ensure quality.' },
    { title: 'Business Analyst', company: 'Company M', location: 'Houston', description: 'Analyze business processes and improve them.' },
    { title: 'Security Engineer', company: 'Company N', location: 'Atlanta', description: 'Ensure security of the organization’s systems.' },
    { title: 'Project Manager', company: 'Company O', location: 'Chicago', description: 'Manage projects from start to finish.' },
    { title: 'Network Engineer', company: 'Company P', location: 'Phoenix', description: 'Manage network infrastructure.' },
    { title: 'Data Scientist', company: 'Company Q', location: 'Los Angeles', description: 'Analyze and interpret complex data.' },
    { title: 'Systems Administrator', company: 'Company R', location: 'Orlando', description: 'Maintain and configure systems.' },
    { title: 'Business Intelligence Developer', company: 'Company S', location: 'San Francisco', description: 'Design and build data models.' },
    { title: 'Cloud Engineer', company: 'Company T', location: 'Austin', description: 'Build and maintain cloud systems.' },
    { title: 'Game Developer', company: 'Company U', location: 'Dallas', description: 'Develop games for different platforms.' },
    { title: 'Digital Marketing Specialist', company: 'Company V', location: 'Miami', description: 'Promote products and services online.' },
    { title: 'Marketing Manager', company: 'Company W', location: 'Chicago', description: 'Oversee marketing campaigns.' },
    { title: 'HR Manager', company: 'Company X', location: 'Houston', description: 'Manage human resources functions.' },
    { title: 'Sales Manager', company: 'Company Y', location: 'San Diego', description: 'Lead sales teams and increase sales.' },
    { title: 'Content Writer', company: 'Company Z', location: 'New York', description: 'Create written content for blogs and websites.' },
    { title: 'Customer Support Specialist', company: 'Company AA', location: 'Phoenix', description: 'Provide customer support and solve problems.' },
    { title: 'Financial Analyst', company: 'Company BB', location: 'Seattle', description: 'Analyze financial data and prepare reports.' },
    { title: 'Legal Advisor', company: 'Company CC', location: 'San Francisco', description: 'Provide legal guidance and support.' },
    { title: 'Public Relations Specialist', company: 'Company DD', location: 'Los Angeles', description: 'Manage public image of the company.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
