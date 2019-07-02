import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserpaymentComponent } from './viewuserpayment.component';

describe('ViewuserpaymentComponent', () => {
  let component: ViewuserpaymentComponent;
  let fixture: ComponentFixture<ViewuserpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
