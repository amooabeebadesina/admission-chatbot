import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Message} from '../../models/message.model';
import {ChatService} from '../../services/chat.service';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith'

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;

  constructor(public chatService: ChatService) {

  }

  ngOnInit() {
    this.messages = this.chatService.conversation.asObservable()
      .scan( (acc, val) => acc.concat(val) )
  }

}
