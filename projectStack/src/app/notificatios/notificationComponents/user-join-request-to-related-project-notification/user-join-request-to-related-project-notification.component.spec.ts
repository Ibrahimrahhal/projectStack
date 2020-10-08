import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJoinRequestToRelatedProjectNotificationComponent } from './user-join-request-to-related-project-notification.component';

describe('UserJoinRequestToRelatedProjectNotificationComponent', () => {
  let component: UserJoinRequestToRelatedProjectNotificationComponent;
  let fixture: ComponentFixture<UserJoinRequestToRelatedProjectNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserJoinRequestToRelatedProjectNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserJoinRequestToRelatedProjectNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
