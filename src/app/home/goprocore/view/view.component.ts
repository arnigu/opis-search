import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { DocumentFilter } from '@app/modules/core/models/documentfilter';

import {MatTableDataSource, PageEvent, Sort} from '@angular/material';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input() title: string;
  @Input() documentType: number;
  @Input() loadOnDisplay = false;
  @Input() loadColumns = [];
  @Input() sortColumn: string;
  @Input() sortDescending: boolean;
  @Input() public rowsCount: number;
  @Input() customFilter: any = undefined;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  filter: DocumentFilter;


  rows: any[] = [];
  maxRows: number;

  dataSource = new MatTableDataSource(this.rows);

  constructor(private query: QueryService) { }

  ngOnInit() {
    this.filter = this.query.getFilter(this.documentType);
    this.filter.loadColumns = this.loadColumns;
    this.filter.sortColumn = this.sortColumn || this.filter.sortColumn;
    this.filter.sortDescending = this.sortDescending != null ? this.sortDescending : this.filter.sortDescending;
    this.filter.rowsCount = this.rowsCount || this.filter.rowsCount;
    if (this.customFilter) {
      this.filter.customFilter = this.customFilter;
    }
    if ( this.loadOnDisplay ) {
      this.loadData();
    }
  }

  public loadData(resetPages?: boolean) {

    if (resetPages) {
      this.paginator.firstPage();
    }

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

  changePage(pageEvent: PageEvent) {
    this.filter.startRow = pageEvent.pageIndex * pageEvent.pageSize;
    this.loadData();
  }

  sortData(sortInfo: Sort) {
    this.filter.sortColumn = sortInfo.active;
    this.filter.sortDescending = (sortInfo.direction === 'desc');
    this.filter.startRow = 0;
    this.loadData();
  }
}
