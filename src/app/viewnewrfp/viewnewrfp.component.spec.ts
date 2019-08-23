import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnewrfpComponent } from './viewnewrfp.component';

describe('ViewnewrfpComponent', () => {
  let component: ViewnewrfpComponent;
  let fixture: ComponentFixture<ViewnewrfpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewnewrfpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnewrfpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
