import { Component, OnInit } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public documentId: string;
  public document: any;

  //
  // Custom filter with parentID as null
  customFilter: any = {'_type': 'BinaryFilterExpressionType', 'propertyName': '_parentID', 'operator': 7};

  constructor(private query: QueryService) { }

  ngOnInit() {
  }

  onSelect(id: string) {
    console.log(id);
    this.documentId = id;
    this.loadDocument(this.documentId);
  }

  loadDocument(id: string) {
    this.query.loadDocument(id).subscribe((data) => {
      this.document = data;
    });
  }

}
