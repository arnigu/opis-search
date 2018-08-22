import { Injectable } from '@angular/core';
import { TransportService } from '@app/modules/core/services/transport/transport.service';
import { DocumentFilter } from '@app/modules/core/models/documentfilter';


import {Observable, throwError} from 'rxjs';

import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  //
  // Check for date patterns in results
  static ISO_CHECK: RegExp = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;


  static serviceUrl = '/Client/Data/View';

  constructor(private trans: TransportService) { }

  public query(filter: DocumentFilter): Observable<any> {
    const queryUrl = QueryService.serviceUrl + '/Query?wrapresults=false';
    const queryData = {'id': '', 'filter': JSON.stringify(filter)};

    return this.trans.post(queryUrl, queryData).pipe(map((result) => {
        for (const row of result.data.rows) {
          row.values = {};
          row.values['id'] = row.id;
          for (let i = 0; i < row.columnValues.length; i++) {
            const val = row.columnValues[i];
            if (QueryService.ISO_CHECK.test(val)) {
              const datePipe = new DatePipe('is');
              row.values[result.metaInfo.columns[i].name] = datePipe.transform(new Date(val), 'short');
            } else {
              row.values[result.metaInfo.columns[i].name] = val;
            }
          }
        }
      return result;
    }));
  }

  public getFilter(docType?: number, customFilter?: any): DocumentFilter {
    const filter = new DocumentFilter();
    filter.documentFormType = docType || 1001;
    filter.customFilter = customFilter;
    return filter;
  }
}
