import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript';
import {Message} from '../models/message.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({accessToken : this.token});
  start_message = new Message('Hello there. I am the admission bot for' +
    '                          OAU Ife. I am here to attend to your enquiries', 'bot');

  conversation = new BehaviorSubject<Message[]>([this.start_message]);

  constructor() { }

  converse (msg: string) {
    const userMessage = new Message(msg, 'user');
    this.updateChat(userMessage);

    return this.client.textRequest(msg)
      .then (res => {
          const speech = res.result.fulfillment.speech;
          const bot_message = new Message(speech, 'bot');
          this.updateChat(bot_message);
      });
  }

  updateChat(msg: Message) {
    this.conversation.next([msg]);
  }

}
