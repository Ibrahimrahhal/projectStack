import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingUserDataComponent } from './adding-user-data.component';

describe('AddingUserDataComponent', () => {
  let component: AddingUserDataComponent;
  let fixture: ComponentFixture<AddingUserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingUserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
