import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondToProjectDialogComponent } from './respond-to-project-dialog.component';

describe('RespondToProjectDialogComponent', () => {
  let component: RespondToProjectDialogComponent;
  let fixture: ComponentFixture<RespondToProjectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondToProjectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondToProjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
