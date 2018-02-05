import { Component, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

const beautify = require('beautify');

declare var jQuery: any;

@Component({
  selector: 'numbering',
  templateUrl: './numbering.component.html',
  styles: [require('./numbering.component.scss').toString()]
})

export class NumberingComponent implements AfterViewInit {
  textEditor = '#userA\r\n'
               + '[domain_local] 6.4.15.31\r\n'
               + '[domain_peer] 6.3.19.3\r\n'
               + '[number] 0299000001\r\n'
               + '[from] 0299000001\r\n'
               + '[contact] 0299000001\r\n'
               + '[owner_username] ACTa\r\n'
               + '[codec] 8 PCMA/8000\r\n'
               + '[list_codec] 8 101\r\n'
               + '[protocol_version] 0\r\n'
               + '[rtp_session_id] 1455279518\r\n'
               + '[rtp_session_version] 1455279518\r\n'
               + '[peer_address] 6.3.19.3\r\n'
               + '[local_address] 6.4.15.31\r\n'
               + '[interface_acta] eth0:1\r\n'
               + '[peer_port] 5060\r\n'
               + '[local_port] 5060';
  options: any = { 
    maxLines: 100, 
    printMargin: false
  };

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {
    // Datatables
    jQuery('.dataTable-complete-1').DataTable({
      dom: '<\'row\'<\'col-sm-6\'l><\'col-sm-6\'f>>' +
        '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-12\'p>>',
      columnDefs: [{
        orderable: false,
        targets: 2
      }]
    });

    // Event
    jQuery('.edit_config').click(function () {

      // Vertical split screen
      jQuery(this).closest('.dataTables_wrapper')
                  .parent()
                  .removeClass('col-md-12')
                  .addClass('col-md-6');

      // Open editor
      var editor = jQuery('#editor_div');
      editor.addClass('col-md-6');
      editor.show();
    });

    jQuery('.close_config').click(function () {
      jQuery('.dataTables_wrapper')
        .parent()
        .removeClass('col-md-6')
        .addClass('col-md-12');

      var editor = jQuery('#editor_div');
      editor.removeClass('col-md-6');
      editor.hide();
    });
  }
}