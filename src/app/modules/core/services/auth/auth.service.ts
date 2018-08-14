import { Injectable } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { TransportService } from '../transport/transport.service';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: String;

  constructor(private transport: TransportService) {
    this.token = localStorage.getItem('token');
  }

  getToken(): String {
    return this.token;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  checkauth(): Observable<any> {
    return this.transport.get('/Client/Access/CurrentContext');
  }

  login(credentials: Credentials): Observable<any> {
    return this.transport.post('/Client/Access/Login', {'credentials': credentials});
  }

  logout() {
    this.setToken(undefined);
    return this.transport.get('/Client/Access/Logout');
  }
}
