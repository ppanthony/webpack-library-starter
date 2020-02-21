import UX from './ux';
export default class DomChecker {

  constructor() {

  }

  init(cb) {

    let ux = new UX();

    ux.onReady(function (widget) {

      // pass widget on up the chain.
      cb(widget);
    });

  }

  setEnabled(enabled) {
    alert(enabled);
    this.enabled = enabled;
  }

  getEnabled() {
    return this.enabled;
  }

}
