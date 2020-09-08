import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSlidesComponent } from './project-slides.component';

describe('ProjectSlidesComponent', () => {
  let component: ProjectSlidesComponent;
  let fixture: ComponentFixture<ProjectSlidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSlidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
