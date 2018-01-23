import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../app.configuration';
import { StatusService } from '../../../services/status.service';

import { Status } from '../../../models/status.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [require('./home.component.scss').toString()]
})

export class HomeComponent implements OnInit {
  status: Status;

  constructor(
    private configuration: Configuration,
    private statusService: StatusService
  ) {
    //this.status = this.statusService.getStatus();
  }

  ngOnInit() {
  }
}