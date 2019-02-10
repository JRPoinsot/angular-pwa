import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {PeopleService} from '../shared/people.service';
import {mergeMap} from 'rxjs/operators';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'pwa-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  person: any = {};

  constructor(private peopleService: PeopleService) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.peopleService.fetchRandom().subscribe(person => (this.person = person));
  }

  delete(personId: string): void {
    this.peopleService.delete(personId)
      .pipe(mergeMap(() => this.peopleService.fetchRandom()))
      .subscribe(person => (this.person = person));
  }
}
