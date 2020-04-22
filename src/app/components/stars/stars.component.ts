import {Component, Input, OnInit} from '@angular/core';

/*
* - 자바에서는 class 안에 변수들을 멤버 필드라고 했지만 여기서는 프로퍼티라고 부른다.
* - ngOnInit() 함수는 컴포넌트의 데이터가 프로퍼티에 전달된 이후, 컴포넌트의 자식 객체에 데이터를 전달하기 전에
*   딱 한 번만 실행된다. => 말이 어렵다.
*/

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {
  @Input() count = 5;
  @Input() rating = 0;
  stars: boolean[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= this.count; i++){
      this.stars.push(i > this.rating);
    }
  }

}
