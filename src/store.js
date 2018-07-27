import Vue from 'vue';
import Vuex from 'vuex';

const CLA_COUNT = 'CLA_COUNT';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [CLA_COUNT](state, data) {
      state.count += data;
    }
  },
  actions: {
    addCount({ commit, state }, data) {
      commit(CLA_COUNT, data);
    }
  },
});
