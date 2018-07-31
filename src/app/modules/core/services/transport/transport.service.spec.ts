import {TestBed, inject} from '@angular/core/testing';

import {TransportService} from './transport.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('TransportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransportService,
        HttpClient,
        HttpHandler
      ]
    });
  });

  it('should be created', inject([TransportService], (service: TransportService) => {
    expect(service).toBeTruthy();
  }));
});
