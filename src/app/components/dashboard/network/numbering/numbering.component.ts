import { Component, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

declare var jQuery: any;

@Component({
  selector: 'numbering',
  templateUrl: './numbering.component.html',
  styles: [require('./numbering.component.scss').toString()]
})

export class NumberingComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {
  }
}