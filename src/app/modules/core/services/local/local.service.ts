import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {environment} from '@env/environment';

import * as io from 'socket.io-client';
import { Observable, of} from 'rxjs';

const LOCAL_SOCKET_URL = 'https://local.gopro.net:48833';
const GOPRO_ENDPOINT   = environment.baseUrl;

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
    const payload = {'endpoint' : GOPRO_ENDPOINT, 'token' : token};
      this.socket.emit('user.token', payload, (data) => {
        console.log('Token was sent', token, data);
      });
  }

  isValid(): Observable<boolean> {

    const isLocalValid = new Observable<boolean>(observer => {
      //
      // GetConfig and connectivity info
      this.socket.emit('config.read', (data) => {
        const valid = (data.endpoint === GOPRO_ENDPOINT);
        console.log('Valid', data.endpoint, valid);
        observer.next(valid);
      });
    });


    return isLocalValid;
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

    //
    // Append a hidden ifram element to invoke start of GoProLocal
    const child = document.createElement('iframe');
    child.src = url;
    child.height = '0px';
    child.style.display = 'none';
    document.body.appendChild(child);
  }

}
