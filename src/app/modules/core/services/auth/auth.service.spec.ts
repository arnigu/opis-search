import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '@app/modules/shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {TransportService} from '@app/modules/core/services/transport/transport.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        TransportService,
        HttpClient,
        HttpHandler
      ],
      imports: [
        RouterTestingModule
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
