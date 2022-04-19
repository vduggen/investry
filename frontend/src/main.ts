import Vue from 'vue';
import money from 'v-money';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import dayjs from 'dayjs';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import filters from './plugins/filters';

import { store } from './store/store.vuex';

Vue.config.productionTip = false;

Vue.prototype.$dayjs = dayjs;

Vue.use(money);
Vue.use(Toast);
Vue.use(filters);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
