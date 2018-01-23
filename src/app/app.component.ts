import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acta',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss').toString()]
})

export class AppComponent {
  constructor(private router: Router) { }
}
