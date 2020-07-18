import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsResultComponent } from './projects-result.component';

describe('ProjectsResultComponent', () => {
  let component: ProjectsResultComponent;
  let fixture: ComponentFixture<ProjectsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
