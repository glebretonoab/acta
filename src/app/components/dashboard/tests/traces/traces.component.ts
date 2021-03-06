import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

declare var jQuery: any;

@Component({
  selector: 'traces',
  templateUrl: './traces.component.html',
  styles: [require('./traces.component.scss').toString()]
})

export class TracesComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) {}

  ngAfterViewInit() {
    // Datatables
    jQuery('.dataTable-complete-1').DataTable({
      dom: '<\'row\'<\'col-sm-6\'l><\'col-sm-6\'f>>' +
        '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-5\'p><\'col-sm-7\'B>>',
      buttons: [
        'selectAll',
        'selectNone',
        {
          text: '<i class="fa fa-file-excel-o" aria-hidden="true"></i> Save in XLS / CSV',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ],
      select: false,
      columnDefs: [
        { orderable: true, targets: 0 },
        { orderable: false, targets: '_all' }
      ]
    });
  }
}