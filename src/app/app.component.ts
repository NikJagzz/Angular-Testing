import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('900ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('900ms', style({ opacity: 0 }))
      ])
    ]),
  ],
})

export class AppComponent {
  title = 'Hello-World';
  courses = [
    { id: 1, name: 'Computer Science', },
    { id: 2, name: 'Law' },
    { id: 3, name: 'Physics' },
    { id: 4, name: 'Mathematics' },
    { id: 5, name: 'English' },
    { id: 6, name: 'Spanish' },
  ]
  course = 1;

  currentDate = new Date();
  public constructor(private _snackBar: MatSnackBar) {

   }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    })
  }
  isShown = false;

  toggle() {
    this.isShown = !this.isShown;
  }
}

