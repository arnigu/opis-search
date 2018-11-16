import { Component, OnInit, ViewChild } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { ViewComponent } from '@app/home/goprocore/view/view.component';
import { DocumentFilter } from '@app/modules/core/models/documentfilter';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  lookupFilter = new DocumentFilter({dataLoadingOptions: 8, documentFormType: 1009, sortColumn: '_subject'});

  foundResults = 0;
  maxResults = 0;

  caseId: string;
  caseDoc: any;


  columns = ['documentNumber', 'subject', 'deadline', 'creationDate'];

  customFilter: any = {};
  topParentFilter = {'_type': 'BinaryFilterExpressionType',
                     'propertyName': '_topParentID', 'operator': 0, 'value': undefined};

  @ViewChild('responses') resposeView: ViewComponent;

  constructor(private query: QueryService) { }

  ngOnInit() { }

  onSelect(id: string) {
    this.caseId = id;
    this.loadCase(this.caseId);
  }

  private loadCase(caseId: string) {
    if (!caseId) {
      this.caseDoc = undefined;
    } else {
      this.topParentFilter.value = caseId;
      this.query.loadDocument(caseId).subscribe((data) => {
        this.caseDoc = data;
        this.resposeView.loadData();
      });
    }
  }
}
