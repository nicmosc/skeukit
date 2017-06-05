import $ from 'jquery';
import rangeslider from 'rangeslider.js';


function init() {
  $('input[type=range]').rangeslider({ polyfill: false });

  // console.log(rangeslider);

  // _attachEvents();
}


function _attachEvents() {
}


export default () => $(document).ready(init);
