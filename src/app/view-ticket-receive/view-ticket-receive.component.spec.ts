import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTicketReceiveComponent } from './view-ticket-receive.component';

describe('ViewTicketReceiveComponent', () => {
  let component: ViewTicketReceiveComponent;
  let fixture: ComponentFixture<ViewTicketReceiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTicketReceiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTicketReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
