import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from 'vuex-class-component';
import CategoryStore from './category.vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(CategoryStore),
  },
});

export const VuexModule = {
  category: createProxy(store, CategoryStore),
};
