import { Component } from '@angular/core';
import {SamsungCode} from "../remote.service";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {RokuCommand, RokuService} from "../roku.service";

@Component({
  selector: 'app-roku',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton
  ],
  templateUrl: './roku.component.html',
  styleUrl: './roku.component.css'
})
export class RokuComponent {

  readonly RokuCommand: typeof RokuCommand = RokuCommand;

  constructor(private rokuService: RokuService) {

  }

  buttonClick(command: string) {
    this.rokuService.sendCommand(command);
  }
}
