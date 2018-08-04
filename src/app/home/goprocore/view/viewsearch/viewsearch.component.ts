import { Component, OnInit, Input, Host } from '@angular/core';
import { DocumentFilter } from '@app/modules/core/models/documentfilter';
import { ViewComponent } from '@app/home/goprocore/view/view.component';

@Component({
  selector: 'app-viewsearch',
  templateUrl: './viewsearch.component.html',
  styleUrls: ['./viewsearch.component.scss']
})
export class ViewSearchComponent implements OnInit {

  @Input() filter = new DocumentFilter();

  constructor(@Host() private viewComp: ViewComponent) { }

  ngOnInit() {
    if (null == this.filter) {
       throw new Error('Attribute filter is required in app-viewsearch');
    }
  }

  search () {
    this.filter.dataLoadingOptions = 8;
    this.viewComp.loadData();
  }

}
