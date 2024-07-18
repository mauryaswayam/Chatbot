import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports:[FormsModule,CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],

})
export class ChatbotComponent implements OnInit {
  inputText = '';
  messages: { username: string, text: string }[] = [];
  username = 'User:';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    const message = {
      username: this.username,
      text: this.inputText
    };
    this.messages.push(message);
    this.inputText = '';
    this.respondToMessage(message);
  }

  respondToMessage(message: { username: string, text: string }): void {
    // TO DO: implement chatbot logic here
    // for now, just respond with a random message
    const responses = [
      "hi", "hello!",
      "how are you?", "I am fine, thank you!",
      "Who are you?", "I am ChatBot",
      "What is your name?","My name is ChatBot",
      "default", "I can't Understand. Please tell me in detail..."
    ];
    const response = responses[Math.floor(Math.random() * responses.length)];
    const botMessage = {
      username: 'Bot:',
      text: response
    };
    this.messages.push(botMessage);
  }
}