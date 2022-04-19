import { VueConstructor } from 'vue/types/umd';

import currencyMask from '@/utils/currencyMask';
import dateMask from '@/utils/dateMask';

export default {
  install(Vue: VueConstructor) {
    Vue.filter('currencyMask', (value: number) => currencyMask(value));
    Vue.filter('dateMask', (value: string) => dateMask(value));
  },
};
