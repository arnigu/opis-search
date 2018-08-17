import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  foundResults = 0;
  maxResults = 0;



  columns = ['documentNumber', 'subject', 'deadline', 'creationDate',
             '_responsibleEmployee[UserRefType]._name', '_coResponsibleEmployees[UserRefType]._name'];

  customFilter: any = {};

  constructor() { }

  ngOnInit() { }

}
