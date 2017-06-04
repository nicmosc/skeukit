import $ from 'jquery';

let kswitch;
let handle;


function init() {
  kswitch = $('.Switch');
  handle = kswitch.find('.Switch__handle');

  _attachEvents();
}


function _attachEvents() {
  handle.click(_handleClickSwitch);
}


function _handleClickSwitch() {
  const parentSwitch = $(this).closest('.Switch');
  parentSwitch.toggleClass('Switch--disabled');
}


export default () => $(document).ready(init);
