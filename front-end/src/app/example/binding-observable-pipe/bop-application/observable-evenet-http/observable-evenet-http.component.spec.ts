import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableEvenetHttpComponent } from './observable-evenet-http.component';

describe('ObservableEvenetHttpComponent', () => {
  let component: ObservableEvenetHttpComponent;
  let fixture: ComponentFixture<ObservableEvenetHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableEvenetHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableEvenetHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
