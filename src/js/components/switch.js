import $ from 'jquery';

let kswitch;
let handle;


function init() {
  kswitch = $('.Switch');
  handle = kswitch.find('.Switch__handle');

  console.log('init');

  _attachEvents();
}


function _attachEvents() {
  handle.click(_handleClickSwitch);
}


function _handleClickSwitch() {
  console.log('clicked');
  kswitch.toggleClass('Switch--disabled');
}


export default () => $(document).ready(init);
