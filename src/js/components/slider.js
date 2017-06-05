import $ from 'jquery';
import rangeslider from 'rangeslider.js';


function init() {
  $('input[type=range]').rangeslider({
    polyfill: false,

    rangeClass: 'Slider__slider',
    disabledClass: 'Slider--disabled',
    horizontalClass: 'Slider--horizontal',
    verticalClass: 'Slider--vertical',
    fillClass: 'Slider__fill',
    handleClass: 'Slider__handle',
  });


  // console.log(rangeslider);

  // _attachEvents();
}


function _attachEvents() {
}


export default () => $(document).ready(init);
