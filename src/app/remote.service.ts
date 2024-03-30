import { Injectable } from '@angular/core';
import {MqttService} from "ngx-mqtt";

@Injectable({
  providedIn: 'root'
})
export class RemoteService {


  constructor(
    private mqttService: MqttService // Config for the service is in app.config.ts...crappy design
  ) {
  }

  sendSamsung(command: number) {
    const message = {
      type: 'samsung',
      address: 7,
      command: command,
      repeat: 1
    };
    this.mqttService.unsafePublish('remote', JSON.stringify(message));
  }
}

export enum SamsungCode {
  SOURCE = 0x1,
  POWER = 0x2,
  ONE = 0x4,
  TWO = 0x5,
  THREE = 0x6,
  FOUR= 0x8,
  FIVE = 0x9,
  SIX = 0xA,
  SEVEN = 0xC,
  EIGHT = 0xD,
  NINE = 0xE,
  ZERO = 0x11,
  MUTE = 0xF,
  VOL_UP= 0x7,
  VOL_DOWN = 0xB,
  CH_UP = 0x12,
  CH_DOWN = 0x10,
  MENU = 0x1A,
  EXIT = 0x2D,
  RETURN = 0x58,
  TOOLS = 0x4B,
  OK = 0x68,
  UP = 0x60,
  DOWN = 0x61,
  RIGHT = 0x62,
  LEFT = 0x65,
};
