import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

 public add(message: string) {
    this.messages.push(message);
  }

 public clear() {
    this.messages = [];
  }
}