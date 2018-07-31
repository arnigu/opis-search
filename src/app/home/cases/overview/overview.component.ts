import { Component, OnInit } from '@angular/core';
import { CasesService } from '@app/modules/core/services/cases/cases.service';

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
    console.log('voerview ');
  }

  query() {
    this.cases.query(this.fullTextSearch).subscribe((data) => {

    });
  }

}
