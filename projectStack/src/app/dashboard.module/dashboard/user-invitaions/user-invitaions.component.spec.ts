import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInvitaionsComponent } from './user-invitaions.component';

describe('UserInvitaionsComponent', () => {
  let component: UserInvitaionsComponent;
  let fixture: ComponentFixture<UserInvitaionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInvitaionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInvitaionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

