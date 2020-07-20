import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiProductComponent } from './di-product.component';

describe('DiProductComponent', () => {
  let component: DiProductComponent;
  let fixture: ComponentFixture<DiProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
