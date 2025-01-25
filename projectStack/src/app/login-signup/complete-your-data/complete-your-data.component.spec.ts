import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteYourDataComponent } from './complete-your-data.component';

describe('CompleteYourDataComponent', () => {
  let component: CompleteYourDataComponent;
  let fixture: ComponentFixture<CompleteYourDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteYourDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteYourDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

