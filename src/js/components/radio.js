import $ from 'jquery';


let radioGroup;
let radioItems;


function init() {

  radioGroup = $('.Radio');
  radioItems = radioGroup.find('.Radio__item');

  _attachEvents();
}


function _attachEvents() {
  radioItems.click(_handleClickRadio);
}


function _handleClickRadio(item) {
  radioItems.each((key, item) => {

  });
}


export default () => $(document).ready(init);
