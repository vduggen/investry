import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const categoriesVuex = {
  GET_CATEGORIES: 'actionCategories',
  SET_CATEGORIES: 'mutationCategories',
};

export default new Vuex.Store({
  state: {
    categories: [],
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    [categoriesVuex.SET_CATEGORIES](state, payload) {
      state.categories = payload;
    },
  },
  actions: {
    [categoriesVuex.GET_CATEGORIES](context, payload) {
      context.commit(categoriesVuex.SET_CATEGORIES, payload);
    },
  },
  modules: {
  },
});
