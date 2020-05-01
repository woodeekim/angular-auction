import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BopApplicationComponent } from './bop-application.component';

describe('BopApplicationComponent', () => {
  let component: BopApplicationComponent;
  let fixture: ComponentFixture<BopApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BopApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BopApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
