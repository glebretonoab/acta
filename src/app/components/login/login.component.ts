import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../app.configuration';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styles: [require('./login.component.scss').toString()]
})

export class LoginComponent implements OnInit {

  constructor(
    private configuration: Configuration
  ) {}

  ngOnInit() {
  }
}