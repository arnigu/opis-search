import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable, of} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import { AuthService } from '@app/modules/core/services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url; /* Pass this on to the context - to make returnUrl possible for deep links */

    console.log('Url', url);

    //
    // Investigate if login is correct
    return this.isLoggedIn(url);
  }

  /**
  * @param returnUrl Optional parameter with URL to pass as returnUrl to login page if user is not logged
  */
 private isLoggedIn(returnUrl?: string): Observable<boolean> {
   return this.authService.checkauth().pipe(
     map((ctx) => {
       return true;
     }),
     catchError((err) => {
       const deepLink = returnUrl ? {returnUrl: returnUrl} : {};
       this.router.navigate(['/login'], {queryParams: deepLink});
       /* Direct to login page */
       return of(false);
     })
   );
 }
}
