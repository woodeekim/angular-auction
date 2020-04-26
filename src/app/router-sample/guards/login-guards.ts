import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuards implements CanActivate{
 private checkIfLoggedIn(): boolean {
   // 실제 로그인 서비스를 사용하는 로직은 여기에 작성
   // 지금은 임의로 true, false를 반환

   const loggedIn: boolean = Math.random() < 0.5;

   if(!loggedIn) {
     console.log('LoginGuard : 유저가 없습니다. ');

   }
   return loggedIn;
 }
 canActivate() {
   return this.checkIfLoggedIn();
 }



}
