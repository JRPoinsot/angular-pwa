import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {PeopleService} from '../shared/people.service';

const BASE_URL = 'http://localhost:9000';

@Component({
  selector: 'pwa-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  private person: any = {};

  constructor(private peopleService: PeopleService) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.peopleService.fetch().subscribe(people => (this.person = people[0]));
  }

  /**
   * Returns random people
   */
  random() {
    this.peopleService.fetchRandom().subscribe(person => (this.person = person));
  }
}