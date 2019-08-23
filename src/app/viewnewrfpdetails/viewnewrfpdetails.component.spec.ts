import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnewrfpdetailsComponent } from './viewnewrfpdetails.component';

describe('ViewnewrfpdetailsComponent', () => {
  let component: ViewnewrfpdetailsComponent;
  let fixture: ComponentFixture<ViewnewrfpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnewrfpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnewrfpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
