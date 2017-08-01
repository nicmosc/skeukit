import kswitch from 'js/components/switch';
import bswitch from 'js/components/button-switch';
import slider from 'js/components/slider';
import radio from 'js/components/radio';


export default {
  kswitch,
  bswitch,
  slider,
  // radio,
  all() {
    kswitch();
    bswitch();
    slider();
    // radio();
  },
};
