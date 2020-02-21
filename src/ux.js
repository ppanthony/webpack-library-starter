
var ready = require('document-ready');

import './css/example.css';

export default class UX {

  constructor() {

  }

  buildUX() {

    var widget = document.createElement('a');

    widget.classList.add('capable-widget');
    document.body.appendChild(widget);
    return widget;
  }

  onReady(callback) {
    let that = this;

    ready(function () {
      callback(that.buildUX());
    });

  }

}
