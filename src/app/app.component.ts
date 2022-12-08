import { Component } from '@angular/core';
import {ROUTE_NAMES} from "./app.routing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photo-library';
  readonly ROUTE_NAMES = ROUTE_NAMES;
}
