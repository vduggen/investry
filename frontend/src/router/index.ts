import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import layout from '../utils/mountLayout';

import CategoryList from '../views/CategoryList.vue';
import CategorySpecific from '../views/CategorySpecific.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    components: layout.default(CategoryList),
    meta: {
      name: 'Página Inicial',
      icon: 'mdi-view-dashboard',
      viewMenu: true,
    },
  },
  {
    path: '/categoria/:id',
    name: 'category-id',
    components: layout.default(CategorySpecific),
    meta: {
      name: 'Categoria',
      icon: 'mdi-view-dashboard',
      viewMenu: false,
    },
  },
];

declare module 'vue-router' {
  interface RouteMeta {
    name: string,
    icon: string,
    viewMenu: boolean
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
