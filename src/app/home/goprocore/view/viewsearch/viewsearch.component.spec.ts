import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSearchComponent } from './viewsearch.component';

describe('ViewsearchComponent', () => {
  let component: ViewSearchComponent;
  let fixture: ComponentFixture<ViewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
