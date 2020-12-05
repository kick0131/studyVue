import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
// ディレクトリ指定でindex.jsが参照される
import router from './router'

Vue.config.productionTip = false

// プラグインの追加
Vue.use(Vuex)


// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
