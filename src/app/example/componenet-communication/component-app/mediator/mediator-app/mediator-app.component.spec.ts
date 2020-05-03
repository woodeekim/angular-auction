import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatorAppComponent } from './mediator-app.component';

describe('MediatorAppComponent', () => {
  let component: MediatorAppComponent;
  let fixture: ComponentFixture<MediatorAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediatorAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
