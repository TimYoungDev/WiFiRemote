import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RokuService {

  readonly ROKU_URL = 'http://192.168.86.50:8060';
  constructor(private http: HttpClient) { }

  sendCommand(command: string) {
    this.postCommand(command);
  }

  private postCommand(command: string) {
    this.http.post(`${this.ROKU_URL}/keypress/${command}`, '')
      .subscribe(response => console.log(response));
  }
}

export enum RokuCommand {
  info = 'info',
  back = 'back',
  home = 'home',
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right',
  reverse = 'rev',
  forward = 'fwd',
  play = 'play',
  enter = 'enter'
}
