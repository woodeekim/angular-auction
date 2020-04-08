## 기록
설치 및 명령어
```bash
# angular CLI 설치
npm install -g @angular/cli@latest

# angular project 생성
ng new <project-name>

# project 실행
ng servee

# Module 생성
ng generate module todo

# Component 생성 (angular CLI 플러그인을 이용해도 좋다.)
- ng generate component todo/todos --module todo/todo.module.ts --export 
￿￿￿￿￿- ng generate component todo --inlineTemplate --inlineStyle

```
메모
```bash
# declation 에는 템플릿에서 사용 할 수 있는 걸 선언한다.
# 앵귤러에서는 단 하나의 RootModule 이 사용된다.
- 다른 모듈을 사용하고 싶으면 루트 모듈인 app.module.ts 에서 선언해야 사용 할 수 있다.
# 컴포넌트는 뷰와 로직으로 구성한다.
# 바인딩은 단방향과 양방향, 바인딩 되는 대상으로 구성
- {{ }} 이중 중괄호를 통해 단방향 바인딩
- 컴포넌트 속성을 이용해 단방향 바인딩 [속성] = "템플릿 표현식"
- 단방향 바인딩인 이벤트 바인딩 (이벤트)="템플릿 문장"
- [(ngModel)]="템플릿 표현식" 인 양방향 바인딩 
# [(ngModule)]은 FormsModule 에 있으니 추가해줘야 한다
# 뷰 캡슐화
- 컴포넌트 안에서 적용한 css가 컴포넌트 밖에서 영향을 미치지 않는다. 
- 컴포넌트에만 css 가 적용할 수 있게 임의의 랜덤한 속성값을 넣어준다. 
# 컴포넌트 자체에 css를 선택해서 적요하고 싶으면 host 선택자를 사용한다.
# 앵귤러에서 컴포넌트는 일반적으로 inline 으로 되어있다.
# 기본적으로 컴포넌트 안에 적용된 css 는 컴포넌트 안에서만 적용된다.
- 글로벌 css 를 적용하고 싶으면 app - styles.scss 에다 작성하면 된다.
# 다양한 파이프를 앵귤러가 기본적으로 제공하며 커스터 마이징한 파이프도 만들 수 있다.
```

생각 정리
```bash
 지금까지 이해한 내용을 토대로 정리하자면 
- angular.json 의 빌드 지정을 main.ts 로 했기 때문에 main.ts 부터 시작
- 루트 모듈인 AppModule -> bootstap 으로 지정한 AppComponent 로 흐름
- component의 클래스는 exfort class 로 선언하기 때문에 다른곳에서 import 한 클래스의 변수이름으로 사용 가능
- @Component 어노테이션의 selector는 html 에서 요소로 사용
- 이후 todo라는 모듈을 통해 todo 에 필요한 각각의 컴포넌트를 todo.modules.ts 에 설정
- todo.modules.ts 에서도 todosComponent를 대표 컴포넌트로 지정하고 todosComponent 안에 여러개의 컴포넌트로 구성
- 결국 app.component.html 에서는 todo-app 이라는 하나의 컴포넌트를 사용

```


