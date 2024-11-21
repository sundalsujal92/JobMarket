import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';  // Firebase Auth service
import { map, take, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    
    return this.afAuth.authState.pipe(
      take(1),  // take the first emission and unsubscribe
      map(user => {
        if (user) {
          // If the user is authenticated, allow the navigation
          return true;
        } else {
          // If the user is not authenticated, redirect to the login page
          this.router.navigate(['/login']);
          return false;
        }
      })
    );
  }
}
