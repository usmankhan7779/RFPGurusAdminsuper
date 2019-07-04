import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsignaluserComponent } from './viewsignaluser.component';

describe('ViewsignaluserComponent', () => {
  let component: ViewsignaluserComponent;
  let fixture: ComponentFixture<ViewsignaluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsignaluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsignaluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
