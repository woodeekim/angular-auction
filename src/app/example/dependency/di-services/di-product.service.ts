
export class DiProduct {
  constructor(public id: number,
              public title: string,
              public price: number,
              public description: string) {
  }
}


export class DiProductService {
  getDiProduct(): DiProduct {
    return new DiProduct(0, 'iPhone 8', 849.99, 'The latest iPhone, 5.8-inch screen');
  }
}

export class MockProductService implements DiProductService {
  getDiProduct(): DiProduct {
    return new DiProduct(0, '갤럭시 s10 ', 500, '이렇게 쉽게 서비스를 바꿀 수 있다.');
}}
