import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {SamsungTvComponent} from "./samsung-tv/samsung-tv.component";
import {RokuComponent} from "./roku/roku.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTabGroup, MatTab, SamsungTvComponent, RokuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WifiRemote';

  constructor() {
  }

}
