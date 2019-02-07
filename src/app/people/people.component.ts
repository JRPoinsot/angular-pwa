import { mergeMap } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import {PeopleService} from '../shared/people.service';
import {Person} from '../model/person.model';

@Component({
  selector: 'pwa-people',
  templateUrl: 'people.component.html',
  styleUrls: ['people.component.css']
})
export class PeopleComponent implements OnInit {
  private addDialog: MatDialogRef<AddDialogComponent>;
  people: Array<Person>;
  dialogStatus = 'inactive';

  constructor(private peopleService: PeopleService, public dialog: MatDialog) {}

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.peopleService.fetch().subscribe(people => (this.people = people));
  }

  delete(person: Person) {
    this.peopleService.delete(person.id).subscribe(people => (this.people = people));
  }

  add(person: Person) {
    this.peopleService.create(person)
      .pipe(mergeMap(() => this.peopleService.fetch()))
      .subscribe((people: any[]) => {
        this.people = people;
        this.hideDialog();
      });
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AddDialogComponent, {
      width: '450px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe(person => {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    this.addDialog.close();
  }
}
