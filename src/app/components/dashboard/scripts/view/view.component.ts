import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../../../app.configuration';

const beautify = require('beautify');

declare var jQuery: any;

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styles: [require('./view.component.scss').toString()]
})

export class ViewComponent implements AfterViewInit {
  text = '<?xml version="1.0" encoding="UTF-8"?><scenario name="outgoing_callwithout100rel" verbose="DEBUG" easyflow="127.0.0.1"><autoreply protocol="SIP" message="OPTIONS" /></scenario>';
  beautifyText = beautify(this.text, {format: 'xml'});
  options: any = { 
    maxLines: 100, 
    printMargin: false
  };

  constructor(
    private configuration: Configuration
  ) {}

  ngAfterViewInit() {

    // jsTree
    jQuery('#jstree_demo_div')
      .on('changed.jstree', function (e, data) {
        // Open editor
        var editor = jQuery('#editor_div');
        var labelFile = data.node.text;
        var arrayString = labelFile.split('.');
        if (arrayString[1] === 'xml') {
          editor.find('.filepath .path span').html(labelFile);
          editor.show();
        } else {
          editor.hide();
        }
      })
      .jstree();
  }
}