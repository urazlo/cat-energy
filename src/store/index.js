import Vue from 'vue';
import Vuex from 'vuex';
import clubs from './modules/clubs/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    clubs,
  },
});
