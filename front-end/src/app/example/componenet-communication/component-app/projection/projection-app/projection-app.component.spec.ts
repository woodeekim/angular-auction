import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectionAppComponent } from './projection-app.component';

describe('ProjectionAppComponent', () => {
  let component: ProjectionAppComponent;
  let fixture: ComponentFixture<ProjectionAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
