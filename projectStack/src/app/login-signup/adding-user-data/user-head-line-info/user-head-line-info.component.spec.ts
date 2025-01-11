import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeadLineInfoComponent } from './user-head-line-info.component';

describe('UserHeadLineInfoComponent', () => {
  let component: UserHeadLineInfoComponent;
  let fixture: ComponentFixture<UserHeadLineInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHeadLineInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeadLineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

