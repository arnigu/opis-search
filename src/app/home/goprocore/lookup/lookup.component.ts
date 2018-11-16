import { Component, OnInit, Input } from '@angular/core';
import { DocumentFilter } from '@app/modules/core/models/documentfilter';

import { QueryService } from '@app/modules/core/services/query/query.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-lookup',
  templateUrl: './lookup.component.html',
  styleUrls: ['./lookup.component.scss']
})
export class LookupComponent implements OnInit {

  optionsForm: FormGroup;
  filteredOptions: any[] = [];

  isLoading = false;

  @Input()
  filter: DocumentFilter;

  constructor(private fb: FormBuilder, private query: QueryService) {
  }

  ngOnInit() {
    this.filter.loadColumns = ['_subject', '_documentNumber'];
    this.optionsForm = this.fb.group({
      optionInput: null
    });

    this.optionsForm
      .get('optionInput')
      .valueChanges
      .pipe(
        debounceTime(700),
        tap(() => this.isLoading = true),
        switchMap((value) => {
          this.filter.fullTextSearch = value + '*';
          console.log(this.filter.fullTextSearch);
          return this.query.query(this.filter)
            .pipe(
              finalize(() => this.isLoading = false),
            );
        })
        ).subscribe((dataset) => {
          const newOptions: any[] = [];
          for (const row of dataset.data.rows) {
            newOptions.push({name: row.columnValues[0]});
          }
          this.filteredOptions = newOptions;
          if(dataset.data.maxResults>dataset.data.rowsCount){
            console.log('Only showing '+dataset.data.rowsCount+' of '+dataset.data.maxResults+' items in list'):
          }
      });

  }

  onInputChanged(searchStr: string) {
    console.log(searchStr);
  }

}
