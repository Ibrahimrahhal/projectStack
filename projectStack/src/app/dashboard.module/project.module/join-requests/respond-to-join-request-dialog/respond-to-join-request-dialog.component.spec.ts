import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondToJoinRequestDialogComponent } from './respond-to-join-request-dialog.component';

describe('RespondToJoinRequestDialogComponent', () => {
  let component: RespondToJoinRequestDialogComponent;
  let fixture: ComponentFixture<RespondToJoinRequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondToJoinRequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondToJoinRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
