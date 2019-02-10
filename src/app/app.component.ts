import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'pwa-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class PeopleAppComponent {
  version: string;

  constructor() {
    this.version = environment.version;
  }
}
