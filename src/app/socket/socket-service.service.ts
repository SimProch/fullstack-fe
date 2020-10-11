import { Injectable } from "@angular/core";
import * as io from "socket.io-client";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  socket: SocketIOClient.Socket;

  constructor() {
    this.socket = io.connect("http://192.168.0.66:5000");
  }

  setSockets = (): void => {
    this.socket.on("connection messages", this.onConnectionMessages);
    this.socket.on("userlist", this.onUserlistChange);
    this.socket.on("username", this.onUsernameChange);
    this.socket.on("typing", this.onUserTyping);
    this.socket.on("chat message", this.onChatMessageReceived);
  };

  onChatMessageReceived = (message: string): void => {
    console.log(message);
  };

  onConnectionMessages = (messages: string[]): void => {
    console.log(messages);
  };

  onUserTyping = (isUserTyping: boolean): void => {
    console.log(isUserTyping)
  };

  onUsernameChange = (): void => {
    console.log("username changed");
  };

  onUserlistChange = (): void => {
    console.log("userListChanged");
  };
}
