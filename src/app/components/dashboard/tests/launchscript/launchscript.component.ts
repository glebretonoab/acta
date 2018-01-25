import { Component, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

declare var jQuery: any;

@Component({
  selector: 'launchscript',
  templateUrl: './launchscript.component.html',
  styles: [require('./launchscript.component.scss').toString()]
})

export class LaunchscriptComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {
    // Select2
    jQuery('.select2').select2();

    // iCheck
    jQuery('input[type=checkbox]').iCheck({
      labelHover: false,
      cursor: true,
      checkboxClass: 'icheckbox_flat-blue'
    });

    // Datatables
    jQuery('.dataTable-complete-1').DataTable({
      dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'p><'col-sm-7'B>>",
      buttons: [
        'selectAll',
        'selectNone',
        {
          text: '<i class="fa fa-pencil-square" aria-hidden="true"></i> Update scripts',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ],
      select: true,
      rowGroup: {
        dataSrc: 3
      },
      "columnDefs": [
        { 
          visible: false, 
          "targets": [3]
        }
      ]
    });

    jQuery('.dataTable tbody').on('click', 'tr', function () {
      jQuery(this).toggleClass('selected');
    });

    // Bootstrap Popover
    jQuery('[data-toggle="popover"]').popover({
      html: true
    });

    // Event
    jQuery('.launchscript').click(function () {
      jQuery('#tab_2_link').tab('show');
    });
  }
}