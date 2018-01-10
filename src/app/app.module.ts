import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { ChatDialogComponent } from './components/chat-dialog/chat-dialog.component';
import {ChatService} from './services/chat.service';
import { ChatSenderComponent } from './components/chat-sender/chat-sender.component';
import {LogService} from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChatDialogComponent,
    ChatSenderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ChatService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
