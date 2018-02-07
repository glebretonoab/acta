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

export class UsersManageComponent implements AfterViewInit {

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {
    // Select2
    jQuery('.select2').select2();

    // Datatables
    jQuery('.dataTable-complete-1').DataTable({
      dom: '<\'row\'<\'col-sm-6\'l><\'col-sm-6\'f>>' +
        '<\'row\'<\'col-sm-12\'tr>>' +
        '<\'row\'<\'col-sm-12\'p>>',
      order: [[ 1, 'asc' ]],
      columnDefs: [
        { 
          orderable: false, 
          targets: [0,8]
        }
      ]
    });
  }
}