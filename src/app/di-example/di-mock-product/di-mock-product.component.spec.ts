import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiMockProductComponent } from './di-mock-product.component';

describe('DiMockProductComponent', () => {
  let component: DiMockProductComponent;
  let fixture: ComponentFixture<DiMockProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiMockProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiMockProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
