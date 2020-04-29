import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

/*
* 기존 forChild() 에서 component 프로퍼티의 값으로 LuxuryComponent를 지정했는데
* 모듈 지연 로딩을 하기 위해서(모듈 지연 로딩이란 필요할 때 해당 모듈을 불러옴) loadChildren 프로퍼티를 사용
*/
@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {path: 'luxury', component: LuxuryComponent }
  ])],
  declarations: [LuxuryComponent]
})
export class LuxuryModule {}
