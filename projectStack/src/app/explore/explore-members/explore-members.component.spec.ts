import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMembersComponent } from './explore-members.component';

describe('ExploreMembersComponent', () => {
  let component: ExploreMembersComponent;
  let fixture: ComponentFixture<ExploreMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
