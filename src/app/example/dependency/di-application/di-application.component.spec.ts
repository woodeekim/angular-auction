import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiApplicationComponent } from './di-application.component';

describe('DiApplicationComponent', () => {
  let component: DiApplicationComponent;
  let fixture: ComponentFixture<DiApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
