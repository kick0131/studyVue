import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'

// 必須。Vue内でvue-routerを使うことを宣言
Vue.use(VueRouter)

const routes = [
  // ルートオブジェクトの定義
  // path       : [必須]リクエストパス
  // name       : [必須]ルートの名前
  // component  : [必須]呼び出されるコンポーネント
  // components : 複数指定する場合
  // redirect   : リダイレクト先のパス
  // children   : ネストしたコンポーネントで更に<router-view>を使う
  // props      : パラメータを受け取るかどうか
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 下記の形式は非同期importと呼び、呼び出された時に生成されるのでリソースの消費を抑えられる
    component: () => import( '../views/About.vue')
  },
  {
    path: '/page1/:id?',
    name: 'page1',
    component: Page1,
    props:true
  },
  {
    path: '/page2',
    name: 'page2',
    component: Page2
  }

]

// 主なルータオプション
// history              履歴情報
// routes               ルーティング情報
// linkActiveClass      
// linkExactActiveClass 完全一致
// sensitive            大文字小文字を区別する
const myrouter = new VueRouter({
  // 動作モード
  // hash     ？
  // history  画面遷移の履歴が保存される
  // abstract ？
  mode: 'history',
  // ベースURL定義
  base: process.env.BASE_URL,
  // routes:routesの省略構文、プロパティと同じ名称の変数を使うことができる
  routes
})

// 生成したインスタンスは以下が使用可能
// ■ routerオブジェクト
// this.$router.push('遷移先パス') 指定したパスに遷移
// this.$router.go(ページ数)       指定した数だけページを進める
// this.$router.back              戻る
// this.$router.foward            進む
// ■ routeオブジェクト
// this.$route.path     現在のパスを返す
// this.$route.name     パス名を返す
// this.$route.params   パスパラメータを返す(/path/001)
// this.$route.query    クエリパラメータを返す(/path?id=001)
// this.$route.fullPath クエリパラメータ含む全てのURLを返す            
export default myrouter
