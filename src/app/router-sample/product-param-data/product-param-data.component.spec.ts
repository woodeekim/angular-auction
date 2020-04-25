import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParamDataComponent } from './product-param-data.component';

describe('ProductParamDataComponent', () => {
  let component: ProductParamDataComponent;
  let fixture: ComponentFixture<ProductParamDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductParamDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductParamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
