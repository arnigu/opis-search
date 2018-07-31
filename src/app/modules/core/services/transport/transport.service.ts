import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http: HttpClient) {
  }

  post(url: string, data: any): Observable<any> {
    const headers: HttpHeaders = this.prepareHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const endpoint = environment.baseUrl + url;

    // TODO
    const body = new URLSearchParams();
    for (const key of Object.keys(data || {})) {
      const value = data[key];

      if (typeof(value) === 'object') {
        body.set(key, JSON.stringify(data[key]));
      } else {
        body.set(key, data[key]);
      }
    }


    const formData = new FormData();
    for (const key of Object.keys(data || {})) {
      formData.append(key, JSON.stringify(data[key]));
    }


    //  return this.http.post(endpoint, formData, { headers: headers});


    return this.http.post(endpoint, body.toString(), {headers: headers});
  }

  put(url: string, data: any): Observable<any> {
    const headers: HttpHeaders = this.prepareHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    const endpoint = environment.baseUrl + url;
    const body = new URLSearchParams();
    for (const key of Object.keys(data || {})) {
      body.set(key, JSON.stringify(data[key]));
    }
    return this.http.put(endpoint, body.toString(), {headers: headers});
  }

  get(url: string, options: any = {}): Observable<any> {
    const endpoint = environment.baseUrl + url;
    options.headers = this.prepareHeaders();
    return this.http.get(endpoint, options).pipe(catchError(this.handleError));
  }

  private prepareHeaders(defaults: any = {}): HttpHeaders {
    return new HttpHeaders(defaults);
  }

  /*getConfig(): any {
    return this.config;
  }*/

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
    } else if (error.status === 401) {
      return throwError('Login is required!');
    }

    // return an ErrorObservable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
