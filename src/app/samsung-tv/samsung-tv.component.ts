import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {RemoteService, SamsungCode} from "../remote.service";

@Component({
  selector: 'app-samsung-tv',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIcon
  ],
  templateUrl: './samsung-tv.component.html',
  styleUrl: './samsung-tv.component.css'
})
export class SamsungTvComponent {

  readonly SamsungCode: typeof SamsungCode = SamsungCode;

  constructor(
    private remoteService: RemoteService
  ) {
  }

  buttonClick(command: number) {
    this.remoteService.sendSamsung(command);
  }
}
