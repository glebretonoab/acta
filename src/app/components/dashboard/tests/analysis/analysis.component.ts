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
    var table = jQuery('.dataTable-complete-1').DataTable({
      dom: '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-12\'p>>',
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

    // Event
    jQuery('.invite').click(function () {
      jQuery('#tab_2_link').tab('show');
    });

    jQuery('.dataTable-complete-1 tbody').on('click', 'a.details-control', function () {
      var tr = jQuery(this).closest('tr');
      var row = table.row( tr );

      if ( row.child.isShown() ) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      }
      else {
        var rowFormat = '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
          '<td width="95px"></td>' +
          '<td><a href="javascript:">487 Request Terminated</a></td>' +
          '</tr>' +
          '<tr>' +
          '<td></td>' +
          '<td><a href="javascript:">487 Request Terminated</a></td>' +
          '</tr>' +
        '</table>'

          // Open this row
          row.child(rowFormat).show();
          tr.addClass('shown');
      }
  } );
  }
}