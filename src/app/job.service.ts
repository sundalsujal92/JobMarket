import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from './job.module';
import { envirosment } from '../environment/envirosment';  // Correct import for your custom environment file

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = envirosment.apiUrl; // API URL from envirosment.ts
  private apiKey = envirosment.apiKey; // API key from envirosment.ts
  private apiHost = envirosment.apiHost; // API host from envirosment.ts
  searchJobs: any;

  constructor(private http: HttpClient) {}

  // Fetch jobs based on the search term
  getJobs(searchTerm: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': this.apiHost,
      'x-rapidapi-key': this.apiKey,
      'Content-Type': 'application/json',
    });

    return this.http.get<any>(`${this.apiUrl}?searchTerm=${searchTerm}`, { headers });
  }

  // Fetch all job details
  getAllJobs(): Observable<Job[]> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': this.apiHost,
      'x-rapidapi-key': this.apiKey,
      'Content-Type': 'application/json',
    });

    return this.http.get<Job[]>(`${this.apiUrl}`, { headers }); // Request for all jobs
  }
}
