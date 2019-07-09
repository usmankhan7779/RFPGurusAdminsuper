import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpriceComponent } from './viewprice.component';

describe('ViewpriceComponent', () => {
  let component: ViewpriceComponent;
  let fixture: ComponentFixture<ViewpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
