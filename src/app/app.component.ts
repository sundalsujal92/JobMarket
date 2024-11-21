// src/app/app.component.ts
import { Component } from '@angular/core';
import { AngularFireAnalytics } from '@angular/fire/compat/analytics';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private analytics: AngularFireAnalytics, private router: Router) {
    // Listen to route changes to log page views
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.analytics.logEvent('page_view', { page_path: event.urlAfterRedirects });
      }
    });
  }
}
