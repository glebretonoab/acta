import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../../../../app.configuration';

const beautify = require('beautify');

declare var jQuery: any;

@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  styles: [require('./configuration.component.scss').toString()]
})

export class EditConfigurationComponent implements AfterViewInit {
  textEditor = '[CATEGORY] ACTA_ALE\r\n'
    + 'HQ319_Alcatel_ACTA = 0299000001\r\n'
    + 'HQ319_Alcatel_ACTA_FORK = 0299000001_0299000002\r\n'
    + 'auto_reply = 0000\r\n\r\n'
    + '[CATEGORY] IPBX_ALE\r\n'
    + 'HQ319-Alcatel-3191101 = 3191101\r\n'
    + 'HQ319-Alcatel-3191102 = 3191102\r\n'
    + 'HQ319-Alcatel-3191105 = 3191105\r\n'
    + 'HQ319-Alcatel-3191556 = 3191556\r\n'
    + 'HQ319_Alcatel_ACTA = 0299000002 \r\n';
  options: any = {
    maxLines: 100,
    printMargin: false
  };

  constructor(
    private configuration: Configuration
  ) { }

  ngAfterViewInit() {

    // jsTree
    jQuery('#jstree_demo_div')
      .on('changed.jstree', function (e, data) {
        // Open editor
        var editor = jQuery('#editor_div');
        var labelFile = data.node.text;
        var arrayString = labelFile.split('.');
        if (arrayString[1] === 'cfg') {
          editor.find('.filepath .path span').html(labelFile);
          editor.show();
        } else {
          editor.hide();
        }
      })
      .jstree();

    jQuery('.close_config').click(function () {
      var editor = jQuery('#editor_div');
      editor.hide();
    });
  }
}