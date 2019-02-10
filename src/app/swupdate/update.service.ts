import { Injectable } from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate,  private snackBar: MatSnackBar) {
    this.swUpdate.available.subscribe(evt => {
      console.log('current version is', evt.current);
      console.log('available version is', evt.available);
      const snack =
        this.snackBar.open('Mise à jour disponible',
          'Recharger l\'application pour l\'installer',
          {
            duration: 10000
          });
      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });
    });
  }
}
