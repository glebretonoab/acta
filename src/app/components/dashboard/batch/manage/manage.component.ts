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

export class BatchManageComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {
    // Select2
    jQuery('.select-batch-name').select2({
      placeholder: 'Select a batch',
      allowClear: true
    });
    jQuery('.select-acta-number').select2({
      placeholder: 'Select a number from',
      allowClear: true
    });
    jQuery('.select-ipbx-number').select2({
      placeholder: 'Select a number to',
      allowClear: true
    });
    jQuery('.select-ipbx-version').select2({
      placeholder: 'Select a version',
      allowClear: true
    });

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
      ]
    });

    jQuery('.dataTable-complete-2').DataTable({
      dom: '<\'row\'<\'col-sm-6\'l><\'col-sm-6\'f>>' +
        '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-5\'p><\'col-sm-7\'B>>',
      buttons: [
        'selectAll',
        'selectNone',
        {
          text: '<i class="fa fa-trash" aria-hidden="true"></i> Delete',
          className: 'delete',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ],
      select: true
    });

    jQuery('.dataTable-complete-4').DataTable({
      dom: '<\'row\'<\'col-sm-6\'l><\'col-sm-6\'f>>' +
        '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-5\'p>>',
      select: false
    });

    jQuery('.dataTable-complete-add-to-reporting').DataTable({
      dom: '<\'row\'<\'col-sm-6\'l><\'col-sm-6\'f>>' +
        '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-5\'p><\'col-sm-7\'B>>',
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
      jQuery(this).parent().remove();
    });

    // Event
    jQuery('a.link_tab2').click(function () {
      jQuery('#tab_2_link').tab('show');
    });
  }
}