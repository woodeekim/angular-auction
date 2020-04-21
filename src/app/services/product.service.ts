import { Injectable } from '@angular/core';


/*
* map() 메서드
* - 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
*/
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Array<Product> {
    return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
  }

  constructor() { }
}

export class Product {
 constructor(public id: number,
             public title: string,
             public price: number,
             public rating: number,
             public description: string,
             public categories: Array<string>) {
 }
}

const products = [
  {
    id : 0,
    title : 'First Product',
    price : 24.99,
    rating : 4.3,
    description : 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories : ['electronics', 'hardware']
  },
  {
    id : 1,
    title : 'Second Product',
    price : 64.99,
    rating : 3.5,
    description : 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories : ['books']
  },
  {
    id : 2,
    title : 'Third Product',
    price : 74.99,
    rating : 4.2,
    description : 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories : ['electronics']
  },
  {
    id : 3,
    title : 'Fourth Product',
    price : 84.99,
    rating : 3.9,
    description : 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories : ['hardware']
  },
  {
    id : 4,
    title : 'Fifth Product',
    price : 94.99,
    rating : 5,
    description : 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories : ['electronics', 'hardware']
  },
  {
    id : 5,
    title : 'Sixth Product',
    price : 54.99,
    rating : 4.6,
    description : 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories : ['books']
  }
];
