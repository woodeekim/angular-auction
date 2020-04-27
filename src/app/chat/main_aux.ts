import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeChatComponent } from './components/home-chat/home-chat.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }

