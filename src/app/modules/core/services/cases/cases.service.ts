import { Injectable } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { DocumentFilter } from '@app/modules/core/models/documentfilter';

import {Observable, throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CasesService {

  constructor(private querys: QueryService) {}

  public query(search?: string): Observable<any> {
    const filter = this.querys.getFilter(1005);
    filter.loadColumns = ['_subject', '_documentNumber', '_responseCount'];

    if (search) {
      filter.fullTextSearch = search;
      filter.dataLoadingOptions = 8;
    }

    filter.sortColumn = 'score';
    console.log(filter);
    return this.querys.query(filter);
  }
}
