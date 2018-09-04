import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import * as io from 'socket.io-client';

const LOCAL_SOCKET_URL = 'https://local.gopro.net:48833';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  connected = false;
  socket: SocketIOClient.Socket;

  constructor(@Inject(DOCUMENT) private document) {
    console.log('Connecting to local');
    this.socket = io.connect(LOCAL_SOCKET_URL);

    this.socket.on('connect', () => {
      //
      // Provide token
      this.connected = true;
      const token = localStorage.getItem('token');
      this.setToken(token);
    });

    this.socket.on('disconnectd', () => {
      console.log('disconnected');
    });

    // Monitor events from GoPro Local
    this.socket.on('event', (type, data) => {
      console.log(event, type, data);
    });
  }

  setToken (token: string) {
      this.socket.emit('user.token', token, (data) => {
        console.log('Token was sent', token, data);
      });
  }

  start () {
    if (!this.connected) {
      this.callUrlHandler('Launch', 'Local');
    }
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

  private callUrlHandler(action: string, documentId: string) {
    const url = 'goprodesktophelper://' + action + '/' + documentId;

    const child = document.createElement('iframe');
    child.src = url;
    child.height = '0px';
    child.style.display = 'none';

    console.log('appending', child);
    document.body.appendChild(child);
    /*
    this.renderer.appendChild(this.elementRef.nativeElement, child);
    document.body).append(
        $('<iframe/>', {
            'height' : '0px',
            'src': url
        }).css({ 'display' : 'none' })
    );
    */
  }

}
