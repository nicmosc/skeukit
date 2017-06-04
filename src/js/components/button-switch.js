import $ from 'jquery';

let switchButton;
let ring;


function init() {
  switchButton = $('.ButtonSwitch');
  ring = switchButton.find('.ButtonSwitch__ring');

  _attachEvents();
}


function _attachEvents() {
  ring.click(_handleClickSwitch);
}


function _handleClickSwitch() {
  console.log('clicked');
  const parentSwitch = $(this).closest('.ButtonSwitch');
  parentSwitch.toggleClass('ButtonSwitch--active');
}


export default () => $(document).ready(init);
