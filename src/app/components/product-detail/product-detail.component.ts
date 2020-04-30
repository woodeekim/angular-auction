import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService, Product, Review } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  reviews: Review[];

  constructor(route: ActivatedRoute, productService: ProductService) {
    // type check => typeof
    // parseInt() => Number()
    const productId: number = Number(route.snapshot.params.productId);
    this.product = productService.getProductById(productId);
    this.reviews = productService.getReviewsForProduct(productId);

  }

  ngOnInit(): void {
  }

}
