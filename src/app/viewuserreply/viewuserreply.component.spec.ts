import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserreplyComponent } from './viewuserreply.component';

describe('ViewuserreplyComponent', () => {
  let component: ViewuserreplyComponent;
  let fixture: ComponentFixture<ViewuserreplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserreplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserreplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
