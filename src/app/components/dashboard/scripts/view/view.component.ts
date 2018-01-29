import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../../../app.configuration';

declare var jQuery: any;

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styles: [require('./view.component.scss').toString()]
})

export class ViewComponent implements AfterViewInit {
  text = '<?xml version="1.0" encoding="UTF-8"?><breakfast_menu><food><name>Belgian Waffles</name><price>$5.95</price><description>Two of our famous Belgian Waffles with plenty of real maple syrup</description><calories>650</calories></food></breakfast_menu>';
  options: any = { maxLines: 100, printMargin: false };

  constructor(
    private configuration: Configuration
  ) {}

  ngAfterViewInit() {

    // jsTree
    jQuery('#jstree_demo_div')
      .on('changed.jstree', function (e, data) {
        // Open editor
        var editor = jQuery('#editor');
        var text = data.node.text;
        var arrayString = text.split('.');
        if (arrayString[1] === 'xml') {
          editor.show();
        } else {
          editor.hide();
        }
      })
      .jstree();

    // Editor  
    //var editor = ace.edit("editor_div");
  }
}