import Vue from 'vue';
import money from 'v-money';
import dayjs from 'dayjs';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import currencyMask from './utils/currencyMask';
import dateMask from './utils/dateMask';

Vue.config.productionTip = false;

Vue.prototype.$dayjs = dayjs;

Vue.use(money);

Vue.filter('currencyMask', (value: number) => currencyMask(value));
Vue.filter('dateMask', (value: string) => dateMask(value));

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
