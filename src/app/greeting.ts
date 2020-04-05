
/*다른 모듈에서 사용할 수 있게 export 를 해야한다.*/
export class Greeting {
  /*typescirpt 파라미터 다음에 올 타입을 지정할 수 있다.*/
  sayHello(name : string) {
    console.log('Hello' + name);
  }
}
