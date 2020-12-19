import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // ストアの定義は全てstateに含める必要がある
  state: {
    count: 0,
  },
  // ストアに対する更新操作は全てmutationsに含める必要がある
  // 引数にストアの定義（state）を受け取る
  mutations: {
    plus: function(state) {
      state.count += 1
    },
    minus: function(state) {
      state.count -= 1
    },
  },
  actions: {},
  modules: {},
})
