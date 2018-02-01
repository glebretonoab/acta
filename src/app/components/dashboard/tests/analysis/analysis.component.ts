import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

declare var jQuery: any;

@Component({
  selector: 'analysis',
  templateUrl: './analysis.component.html',
  styles: [require('./analysis.component.scss').toString()]
})

export class AnalysisComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {

    // Datatables
    jQuery('.dataTable-complete-1').DataTable({
      dom: "<'row'<'col-sm-12'tr>>" +
          "<'row'<'col-sm-12'p>>",
      select: false,
      columnDefs: [
        { orderable: true, targets: 0 },
        { orderable: false, targets: '_all' }
      ]
    });
    
    // Bootstrap Popover
    jQuery('[data-toggle="popover"]').popover({
      html: true,
      trigger: 'hover',
      placement: 'right'
    });
  }
}