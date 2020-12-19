import Vue from 'vue'
import Vuex from 'vuex'
import { countstore } from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    countstore,
  },
})
