import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinRequestOnProjectDashboardComponent } from './join-request-on-project-dashboard.component';

describe('JoinRequestOnProjectDashboardComponent', () => {
  let component: JoinRequestOnProjectDashboardComponent;
  let fixture: ComponentFixture<JoinRequestOnProjectDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinRequestOnProjectDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinRequestOnProjectDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

