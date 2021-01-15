import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    googlemap: null,
    mapapi: null
  },
  mutations: {
    setMap(state, map) {
      state.googlemap = map;
    },
    setMapApi(state, api) {
      state.mapapi = api;
    }
  },
  actions: {},
  modules: {}
});
