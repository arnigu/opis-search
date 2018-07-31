import { Injectable } from '@angular/core';
import { TransportService } from '@app/modules/core/services/transport/transport.service';
import { DocumentFilter } from '@app/modules/core/models/documentfilter';

import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor(private trans: TransportService) {}

  public query(search?: string): Observable<any> {
    const filter = new DocumentFilter();
    filter.documentFormType = 1005;
    filter.loadColumns = ['_subject', '_documentNumber'];

    if (search) {
      filter.fullTextSearch = search;
      filter.dataLoadingOptions = 8;
    }

    return this.trans.post('/Client/Data/View/Query?wrapresults=false', {'id': '', 'filter': JSON.stringify(filter)});
  }
}
