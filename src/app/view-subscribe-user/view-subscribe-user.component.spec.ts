import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubscribeUserComponent } from './view-subscribe-user.component';

describe('ViewSubscribeUserComponent', () => {
  let component: ViewSubscribeUserComponent;
  let fixture: ComponentFixture<ViewSubscribeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubscribeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubscribeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
