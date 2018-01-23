import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../app.configuration';
import { StatusService } from '../../services/status.service';

import { Status } from '../../models/status.model';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styles: [require('./dashboard.component.scss').toString()]
})

export class DashboardComponent implements OnInit {
  paramStatus: string;
  status: Status;
  aStatus = [
    { shortcut: 'adm', name: 'administrator' },
    { shortcut: 'sup', name: 'supervisor' },
    { shortcut: 'ctr', name: 'contributor' }
  ];

  constructor(
    private configuration: Configuration,
    private route: ActivatedRoute,
    private statusService: StatusService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.paramStatus = params['status'];
      this.status = this.aStatus.find(s => s.shortcut === this.paramStatus);
      this.statusService.currentStatus.subscribe(
        status => {
          this.status = status
        });
    });
  }
}