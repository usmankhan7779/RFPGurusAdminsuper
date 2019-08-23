import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewupdaterfpComponent } from './viewupdaterfp.component';

describe('ViewupdaterfpComponent', () => {
  let component: ViewupdaterfpComponent;
  let fixture: ComponentFixture<ViewupdaterfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewupdaterfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewupdaterfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
