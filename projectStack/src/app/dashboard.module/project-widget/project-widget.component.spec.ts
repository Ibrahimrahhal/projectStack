import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWidgetComponent } from './project-widget.component';

describe('ProjectWidgetComponent', () => {
  let component: ProjectWidgetComponent;
  let fixture: ComponentFixture<ProjectWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
