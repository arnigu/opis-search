import { Component, OnInit } from '@angular/core';
import { CasesService } from '@app/modules/core/services/cases/cases.service';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  fullTextSearch: string;

  foundResults = 0;
  maxResults = 0;


  constructor(private cases: CasesService) { }

  ngOnInit() {
    console.log('Overview');
  }

  query() {
    this.cases.query(this.fullTextSearch).subscribe((data) => {
      console.log(data);
      this.maxResults = data.data.maxResults;

      console.log(this.maxResults);
    });
  }

}
