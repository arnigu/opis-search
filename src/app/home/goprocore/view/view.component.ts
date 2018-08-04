import { Component, OnInit, Input } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { DocumentFilter } from '@app/modules/core/models/documentfilter';

import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input() documentType: number;
  @Input() loadOnDisplay = false;
  @Input() loadColumns = [];
  filter: DocumentFilter;


  rows: any[] = [];
  maxRows: number;

  dataSource = new MatTableDataSource(this.rows);

  constructor(private query: QueryService) { }

  ngOnInit() {
    this.filter = this.query.getFilter(this.documentType);
    this.filter.loadColumns = this.loadColumns;
    if ( this.loadOnDisplay ) {
      this.loadData();
    }
  }

  public loadData() {
    this.query.query(this.filter).subscribe((result) => {
      this.rows = result.data.rows;
      this.maxRows = result.data.maxResults;

      this.rows = [];
      for (const row of result.data.rows) {
        this.rows.push(row.values);
      }

      this.dataSource.data = this.rows;
    });
  }

}
