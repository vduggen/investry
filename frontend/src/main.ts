import Vue from 'vue';
import money from 'v-money';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import dayjs from 'dayjs';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import currencyMask from './utils/currencyMask';
import dateMask from './utils/dateMask';
import { store } from './store/store.vuex';

Vue.config.productionTip = false;

Vue.prototype.$dayjs = dayjs;

Vue.use(money);
Vue.use(Toast);

Vue.filter('currencyMask', (value: number) => currencyMask(value));
Vue.filter('dateMask', (value: string) => dateMask(value));

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
