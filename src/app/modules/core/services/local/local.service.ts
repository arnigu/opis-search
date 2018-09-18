import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from '@env/environment';

import * as io from 'socket.io-client';

const LOCAL_SOCKET_URL = 'https://local.gopro.net:48833';
const GOPRO_ENDPOINT = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  launched = false;
  connected = false;

  socket: SocketIOClient.Socket;

  constructor(@Inject(DOCUMENT) private document) {

    //
    // Attemt connection on initialization
    this.connect();

    //
    // Register handlers
    this.socket.on('connect', () => {
      //
      // Provide token
      this.connected = true;
      const token = localStorage.getItem('token');
      this.setToken(token);
    });

    this.socket.on('disconnect', () => {
      this.connected = false;
      console.log('disconnected');
    });

    // Monitor events from GoPro Local
    this.socket.on('event', (type, data) => {
      console.log('Event', event, type, data);
    });
  }

  connect(timeout = 2) {
    console.log('Connecting to local');
    if ( !this.socket ) {
      this.socket = io.connect(LOCAL_SOCKET_URL);
    } else {
      this.socket.connect();
    }

    setTimeout(() => {
      if (!this.connected) {
        console.log('Failed to connect within ' + timeout + ' secs: Need to launch?');
        this.socket.disconnect();
      } else {
        console.log('GoPro Local was connected!');
      }
    }, timeout * 1000);
  }

  setToken(token: string) {
    const payload = { 'endpoint': GOPRO_ENDPOINT, 'token': token };
    this.socket.emit('user.token', payload, (data) => {
      console.log('Token was sent', token, data);
    });
  }

  start() {
    if (!this.connected && !this.launched) {
      this.launched = true;
      console.log('Starting GoPro Local with URL handler!');
      this.callUrlHandler('Launch', 'Local');
      this.connect(15);
    } else if ( this.connected ) {
      console.log('GoPro Local is already connected!');
    } else if (this.launched) {
      console.log('Launch attempt has already been made. Try to start it from Start menu.');
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

    //
    // Create hidden iframe to desktop helper
    const url = 'goprodesktophelper://' + action + '/' + documentId;
    const child = document.createElement('iframe');
    child.src = url;
    child.height = '0px';
    child.style.display = 'none';

    //
    // Add it to tbe body
    document.body.appendChild(child);
  }

}
