import kswitch from 'js/components/switch';
import bswitch from 'js/components/button-switch';
import slider from 'js/components/slider';


export default {
  kswitch,
  bswitch,
  slider,
  all() {
    kswitch();
    bswitch();
    slider();
  },
};
