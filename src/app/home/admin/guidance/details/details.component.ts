import { Component, OnInit } from '@angular/core';
import { QueryService } from '@app/modules/core/services/query/query.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public document: any;

  constructor(private query: QueryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.query.loadDocument(params['id']).subscribe((doc) => {
        this.document = doc;
      });
    });
  }

}
