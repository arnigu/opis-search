import { Injectable, Inject } from '@angular/core';
import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '@env/environment';

import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService, private route: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (environment.authmode === 'token') {
      return this.interceptToken(request, next);
    } else if (environment.authmode === 'cookie') {
      return this.interceptCookie(request, next);
    }
    //
    // Default nothing
    return next.handle(request);
  }

  /*
  * Handling of Cookie interception
  */
  private interceptCookie(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /*
    * Cookie credentials
    */
    request = request.clone({
      withCredentials: true
    });

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.route.navigate(['/login']);
        }
      }
    }));
  }


  /*
  * Handling of Token interception
  */
  private interceptToken(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.headers.get('x-goprotoken')) {
          this.auth.setToken(event.headers.get('x-goprotoken'));
        }
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.route.navigate(['/login']);
        }
      }
    }));
  }
}
