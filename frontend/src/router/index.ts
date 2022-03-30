import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import layout from '../utils/mountLayout';

import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    components: layout.default(HomeView),
    meta: {
      name: 'Página Inicial',
      icon: 'mdi-view-dashboard',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
