import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiglepaymentDetailsComponent } from './siglepayment-details.component';

describe('SiglepaymentDetailsComponent', () => {
  let component: SiglepaymentDetailsComponent;
  let fixture: ComponentFixture<SiglepaymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiglepaymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiglepaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
