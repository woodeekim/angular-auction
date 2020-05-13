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

  newRating: number;
  newComment: string;

  isReviewHidden = true;

  constructor(route: ActivatedRoute, productService: ProductService) {
    // type check => typeof
    // parseInt() => Number()
    const productId: number = Number(route.snapshot.params.productId);
    this.product = productService.getProductById(productId);
    this.reviews = productService.getReviewsForProduct(productId);

  }

  ngOnInit(): void {
  }

  addReview() {
    const review = new Review(0, this.product.id , new Date(), 'Anonymous', this.newRating, this.newComment);

    console.log('Adding review' + JSON.stringify(review));

    this.reviews = [...this.reviews];
    this.product.rating = this.averageRating(this.reviews);

    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    const sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  private resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }
}
