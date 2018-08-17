import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { MatSelectChange } from '../../../../../node_modules/@angular/material';
import { ViewComponent } from '@app/home/goprocore/view/view.component';
import { BinaryFilterExpression } from '@app/modules/core/models/documentfilter';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @ViewChild(ViewComponent) child: ViewComponent;

  columns = ['subject', 'loginName', 'email'];

  rolesFilter = new BinaryFilterExpression('_userRoles[UserRoleRefType]._ID', 6, null);
  orgsFilter  = new BinaryFilterExpression('_organizationUnit[ACLDocumentRefType]._ID', 0, null);

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
      this.rolesFilter.value = null;
      this.rolesFilter.inValues = null;
    } else {
      this.rolesFilter.inValues = [evt.value];
    }
    this.applyCustomFilters();
  }

  orgChange(evt: MatSelectChange) {
    if (!evt.value) {
      this.orgsFilter.value = null;
      this.orgsFilter.inValues = null;
    } else {
      this.orgsFilter.value = evt.value;
      this.orgsFilter.inValues = [evt.value];
    }
    this.applyCustomFilters();
  }

  private applyCustomFilters() {
    const andList = {'_type': 'ConjunctionListType', 'elements': []};

    if (this.rolesFilter.inValues != null) {
      andList.elements.push(this.rolesFilter);
    }
    if (this.orgsFilter.value != null) {
      andList.elements.push(this.orgsFilter);
    }
    if (andList.elements.length > 0) {
      this.customFilter['_type'] =  'ConjunctionListType';
      this.customFilter['elements'] = andList.elements;
    } else {
      //
      // Clearing
      for (const prop of Object.keys(this.customFilter)) {
        delete this.customFilter[prop];
      }
    }
    this.child.loadData(true);
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

