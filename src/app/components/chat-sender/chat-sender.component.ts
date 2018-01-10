import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../services/chat.service';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-chat-sender',
  templateUrl: './chat-sender.component.html',
  styleUrls: ['./chat-sender.component.css']
})
export class ChatSenderComponent implements OnInit {

  form_value = '';

  constructor(private chatService: ChatService, private logService: LogService ) { }

  ngOnInit() {
  }

  sendMessage() {
    this.chatService.converse(this.form_value);
    this.logService.logMessage(this.form_value)
        .subscribe((res) => {}, (err) => {});
    this.form_value = '';
  }

}
