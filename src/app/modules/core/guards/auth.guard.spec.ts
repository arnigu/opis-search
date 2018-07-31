import {TestBed, async, inject} from '@angular/core/testing';

import {AuthGuard} from './auth.guard';
import {RouterTestingModule} from '@angular/router/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import { AuthService } from '../services/auth/auth.service';
import { TransportService } from '../services/transport/transport.service';


describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        AuthService,
        TransportService,
        HttpClient,
        HttpHandler],
      imports: [
        RouterTestingModule
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
