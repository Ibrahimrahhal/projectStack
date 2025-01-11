import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHomeTabComponent } from './project-home-tab.component';

describe('ProjectHomeTabComponent', () => {
  let component: ProjectHomeTabComponent;
  let fixture: ComponentFixture<ProjectHomeTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectHomeTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectHomeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

