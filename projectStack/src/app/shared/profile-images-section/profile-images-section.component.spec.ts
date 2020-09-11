import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImagesSectionComponent } from './profile-images-section.component';

describe('ProfileImagesSectionComponent', () => {
  let component: ProfileImagesSectionComponent;
  let fixture: ComponentFixture<ProfileImagesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileImagesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImagesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
