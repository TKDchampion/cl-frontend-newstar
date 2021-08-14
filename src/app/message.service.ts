import { Injectable } from "@angular/core";

@Injectable()
export class MessageService {
  messages: string[] = [];
  testText = 0;

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    const index = this.messages.length;
    index <= 5
      ? (this.messages = [])
      : (this.messages = this.messages.slice(5, index));
  }
}
