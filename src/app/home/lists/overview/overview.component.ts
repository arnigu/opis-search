import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewComponent } from '@app/home/goprocore/view/view.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @ViewChild(ViewComponent) child: ViewComponent;

  columns = ['subject'];
  constructor() { }

  ngOnInit() {

  }

}

