import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJoinRequestNotificationComponent } from './project-join-request-notification.component';

describe('ProjectJoinRequestNotificationComponent', () => {
  let component: ProjectJoinRequestNotificationComponent;
  let fixture: ComponentFixture<ProjectJoinRequestNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectJoinRequestNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectJoinRequestNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
