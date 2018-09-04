import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from '@app/home/goprocore/view/view.component';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { LocalService } from '@app/modules/core/services/local/local.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  private document: any;
  private documentId: string;

  @ViewChild(ViewComponent) child: ViewComponent;

  columns = ['subject', 'documentNumber', 'creationDate'];
  constructor( private query: QueryService, private local: LocalService) { }

  ngOnInit() {

  }

  onSelect(id: string) {
    this.documentId = id;
    this.loadDocument(this.documentId);
  }

  loadDocument(id: string) {
    this.query.loadDocument(id).subscribe((data) => {
      this.document = data;
    });
  }

  editDocument(document: any) {
    this.local.editDocument(document.id);
  }

  openDocument(document: any) {
    this.local.openDocument(document.id);
  }

  launchLocal() {
    this.local.start();
  }

}

