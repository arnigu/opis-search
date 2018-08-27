import { Component, OnInit } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  foundResults = 0;
  maxResults = 0;

  caseId: string;
  caseDoc: any;


  columns = ['documentNumber', 'subject', 'deadline', 'creationDate'];

  customFilter: any = {};

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
      this.query.loadDocument(caseId).subscribe((data) => {
        this.caseDoc = data;
      });
    }
  }
}
