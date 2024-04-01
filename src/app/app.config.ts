import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {IMqttServiceOptions, MqttModule} from "ngx-mqtt";
import {HttpClientModule} from "@angular/common/http";

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.86.51',
  port: 9001,
  path: '/mqtt'
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    importProvidersFrom(MqttModule.forRoot(MQTT_SERVICE_OPTIONS)),
    importProvidersFrom(HttpClientModule)
  ]
};
