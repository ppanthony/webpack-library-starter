import DomChecker from './domchecker.js';
import DomInspector from './dominspect/index';

const domCheck = new DomChecker();

domCheck.init(function (widget) {

  const inspector = new DomInspector({
    root: 'body',
    exclude: [document.querySelector('.capable-widget')],
    theme: 'you-custom-theme-class'
  });

  widget.addEventListener('click', function () {
    domCheck.setEnabled(!domCheck.getEnabled());

    if (domCheck.getEnabled()) {
      inspector.enable();
    } else {
      inspector.disable();
    }

  });

});
