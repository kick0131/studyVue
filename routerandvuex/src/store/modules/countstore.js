// Counter.vueで使用するStore定義
export default {
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
    // 第2引数は呼び出し元から設定される引数
    update: function(state, payload) {
      // stepは呼び出し元で定義したプロパティ
      state.count += payload.step
    },
  },
  actions: {},
  modules: {},
}
