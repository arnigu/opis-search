import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

const LOCAL_SOCKET_URL = 'https://local.gopro.net:48833';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  socket: SocketIOClient.Socket;

  constructor() {
    console.log('Connecting to local');
    this.socket = io.connect(LOCAL_SOCKET_URL);

    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('disconnectd', () => {
      console.log('disconnected');
    });

    // Monitor events from GoPro Local
    this.socket.on('event', (type, data) => {
      console.log(event, type, data);
    });



  }

  editDocument(id: string) {
    this.socket.emit('document.edit', id, (result) => {
      console.log(result);
    });

  }

  openDocument(id: string) {
    this.socket.emit('document.open', id, (result) => {
      console.log(result);
    });
  }

}
