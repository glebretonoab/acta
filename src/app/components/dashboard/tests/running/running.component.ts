import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

declare var jQuery: any;

@Component({
  selector: 'running',
  templateUrl: './running.component.html',
  styles: [require('./running.component.scss').toString()]
})

export class RunningComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) {
    //this.status = this.statusService.getStatus();
  }

  ngAfterViewInit() {
    // Datatables.net
    jQuery('.dataTable-complete-2').DataTable({
      dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'p><'col-sm-7'B>>",
      buttons: [
        'selectAll',
        'selectNone',
        {
          text: '<i class="fa fa-trash" aria-hidden="true"></i> Delete scripts',
          className: 'delete',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        },
        {
          text: '<i class="fa fa-file-excel-o" aria-hidden="true"></i> Save in XLS / CSV',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ],
      select: true,
      columnDefs: [
        { orderable: true, targets: [0, 1] },
        { orderable: false, targets: '_all' }
      ]
    });

    jQuery('.dataTable-ligth').DataTable({
      dom: "t",
      columnDefs: [
        { orderable: true, targets: 1 },
        { orderable: false, targets: '_all' }
      ]
    });

    jQuery('.dataTable-complete-2 tbody').on('click', 'tr', function () {
      jQuery(this).toggleClass('selected');
    });

    // Bootstrap Datepicker
    jQuery('.datepicker').datepicker({
      format: 'yyyy-mm-dd'
    });
  }
}