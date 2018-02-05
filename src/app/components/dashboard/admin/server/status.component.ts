import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

declare var jQuery: any;

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styles: [require('./status.component.scss').toString()]
})

export class ServerStatusComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {

    // Datatables
    jQuery('.dataTable-complete-1').DataTable({
      dom: '<\'row\'<\'col-sm-12\'tr>>' +
          '<\'row\'<\'col-sm-12\'p>>',
      select: false,
      columnDefs: [
        { orderable: true, targets: 0 },
        { orderable: false, targets: '_all' }
      ]
    });
    
    // Bootstrap Tooltip
    jQuery('[data-toggle="tooltip"]').tooltip({
      html: true,
      trigger: 'hover',
      placement: 'bottom'
    });
  }
}