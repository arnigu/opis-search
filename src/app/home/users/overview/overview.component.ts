import { Component, OnInit } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { MatSelectChange } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  columns = ['subject', 'loginName', 'email'];
  customFilter: any = {};

  roles: any[];
  orgs: any[];

  constructor(private query: QueryService) { }

  ngOnInit() {
    this.updateRoles();
    this.updateOrgs();
  }

  roleChange(evt: MatSelectChange) {
    if (!evt.value) {

    } else {

    }
  }

  orgChange(evt: MatSelectChange) {
    if (!evt.value) {

    } else {

    }
  }

  private updateRoles() {
    const roleFilter = this.query.getFilter(1019);
    roleFilter.loadColumns = ['subject'];
    roleFilter.sortColumn = 'subject';
    roleFilter.sortDescending = false;

    this.query.query(roleFilter).subscribe((data) => {
      this.roles = [];
      for (const row of data.data.rows) {
        console.log(row);
        this.roles.push({'id': row.id, 'name': row.columnValues[0]});
      }
    });
  }

  private updateOrgs() {
    const filter = this.query.getFilter(1015);
    filter.loadColumns = ['subject'];
    filter.sortColumn = 'subject';
    filter.sortDescending = false;

    this.query.query(filter).subscribe((data) => {
      this.orgs = [];
      for (const row of data.data.rows) {
        this.orgs.push({'id': row.id, 'name': row.columnValues[0]});
      }
    });
  }
}

