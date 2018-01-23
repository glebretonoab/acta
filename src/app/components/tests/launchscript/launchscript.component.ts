import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../app.configuration';

@Component({
  selector: 'launchscript',
  templateUrl: './launchscript.component.html',
  styles: [require('./launchscript.component.scss').toString()]
})

export class LaunchscriptComponent implements OnInit {

  constructor(
    private configuration: Configuration
  ) {
    //this.status = this.statusService.getStatus();
  }

  ngOnInit() {
  }
}