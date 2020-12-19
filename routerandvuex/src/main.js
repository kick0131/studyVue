import Vue from 'vue'
import App from './App.vue'

// ディレクトリ指定でindex.jsが参照される
import router from './router'

import store from './store'

Vue.config.productionTip = false

// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
