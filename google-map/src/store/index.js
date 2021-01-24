import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    googlemap: null,
    mapapi: null,
    appbarname: null,
  },
  mutations: {
    setMap(state, map) {
      state.googlemap = map;
    },
    setMapApi(state, api) {
      state.mapapi = api;
    },
    setAppBarName(state, name) {
      state.appbarname = name;
    }
  },
  actions: {},
  modules: {}
});
