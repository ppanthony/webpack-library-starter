
var ready = require('document-ready');

import './css/example.css';

export default class UX {

  constructor() {

  }

  buildUX() {

    var widget = document.createElement('div');

    widget.classList.add('capable-widget');
    document.body.appendChild(widget);
  }

  onReady() {
    let that = this;

    ready(function () {
      that.buildUX();
    });

  }

}
