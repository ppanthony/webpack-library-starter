
var ready = require('document-ready');

export default class UX {

  constructor() {

  }

  buildUX() {

    var widget = document.createElement('div');

    widget.style.cssText = 'position:absolute;width:100px;height:100px;bottom:10px;right:10px;z-index:9999;background:#000';
    document.body.appendChild(widget);
  }

  onReady() {
    let that = this;

    ready(function () {
      that.buildUX();
    });

  }

}
