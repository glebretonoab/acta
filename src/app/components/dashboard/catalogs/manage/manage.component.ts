import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

declare var jQuery: any;

@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styles: [require('./manage.component.scss').toString()]
})

export class ManageComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {
    // Select2
    jQuery('.select2').select2();
    jQuery('.select2-multiple').select2MultiCheckboxes({
      placeholder: "Select options",
      width: "auto"
    })

    // Datatables
    jQuery('.dataTable-complete-3').DataTable({
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

    jQuery('.dataTable-complete-4').DataTable({
      dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
        "<'row'<'col-sm-12'tr>>" +
        "<'row'<'col-sm-5'p>>",
      select: false,
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

    jQuery('.dataTable-complete-add-to-catalog').DataTable({
      dom: "<'row'<'col-sm-6'l><'col-sm-6'f>>" +
           "<'row'<'col-sm-12'tr>>" +
           "<'row'<'col-sm-5 text-left'p><'col-sm-7'B>>",
      columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0
      }],
      select: {
        style: 'os',
        selector: 'td:first-child'
      },
      order: [[1, 'asc']],
      buttons: [
        'selectAll',
        'selectNone'
      ]
    });

    // Bootstrap Popover
    jQuery('[data-toggle="popover"]').popover({
      html: true
    });

    // Event
    jQuery('.add-script').click(function () {
      var target = jQuery('#scripts_target');
      var script = jQuery(this).closest('tr').find('td:nth-child(2)').html();
      target.append('<p><a class="delete-script" href="javascript:"><i class="fa fa-minus-circle" aria-hidden="true"></i></a> ' + script + '</p>');
    });

    jQuery('.delete-script').click(function () {
      console.log('delete');
      jQuery(this).parent().remove();
    });
  }
}