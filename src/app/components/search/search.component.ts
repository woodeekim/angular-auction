import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ProductService]
})
export class SearchComponent {
  formModel: FormGroup;
  categories: string[];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getAllCategories();

    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: [null, Validators.minLength(3)],
      price: [null, positiveNumberValidator],
      category: [-1]
    });
  }

  onSearch() {
    if ( this.formModel.valid ) {
      console.log(this.formModel.value);
    }
  }
}

// 커스텀한 유효성 검사기 정의
function positiveNumberValidator(control: FormControl): any {
  if (!control.value) {
    return null;
  }

  // parseInt() => Number() 로 바꿔야함
  const price = Number(control.value);

  return price === null || typeof price === 'number' && price > 0 ? null : { positivenumber: true};

}
