import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteToProjectDialogComponent } from './invite-to-project-dialog.component';

describe('InviteToProjectDialogComponent', () => {
  let component: InviteToProjectDialogComponent;
  let fixture: ComponentFixture<InviteToProjectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteToProjectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteToProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
