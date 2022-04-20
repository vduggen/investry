import Vue from 'vue';
import Vuex from 'vuex';
import { createProxy, extractVuexModule } from 'vuex-class-component';
import CategoryStore from './category.vuex';
import CashFlowStore from './cashflow.vuex';
import ColorsStore from './colors.vuex';
import ComponentsStore from './components.vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(CategoryStore),
    ...extractVuexModule(CashFlowStore),
    ...extractVuexModule(ColorsStore),
    ...extractVuexModule(ComponentsStore),
  },
});

export const VuexModule = {
  category: createProxy(store, CategoryStore),
  cashflow: createProxy(store, CashFlowStore),
  colors: createProxy(store, ColorsStore),
  components: createProxy(store, ComponentsStore),
};
