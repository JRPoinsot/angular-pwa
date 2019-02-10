import { Component } from '@angular/core';
import {environment} from '../environments/environment';
import {UpdateService} from './swupdate/update.service';
import {CheckForUpdateService} from './swupdate/check-for-update.service';

@Component({
  selector: 'pwa-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class PeopleAppComponent {
  version = '';


  constructor(private updateService: UpdateService,
              private checkForUdpdate: CheckForUpdateService) {
    this.version = environment.version;
  }
}
