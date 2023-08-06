# Vue 3 + Vite

| ライブラリ | 説明 |
|-- | --|
|vuetify | UIライブラリ |
|vue-router | ルーティング |
|pinia | 状態管理 |

## usage
```bash
npm i
npm run dev
```

## description
### レイアウトについて
3ペイン構成で作成
```bash
+-------------------------------+
| menu                          |
+-------------------------------+
+------+ +----------------------+
| list | | main                 |
|      | |                      |
+------+ +----------------------+
```
| 位置 | コンポーネント | 説明 |
|--    |-- | --|
| list | /components/MyLinkLists | リンクリスト |
| menu | /components/MyTabs      | メニューバー |
| main | /pages/*                | メインページ |

### ルーティング定義
パスとコンポーネントの紐づけを定義する
```bash
#/pages/routes.js
import { createRouter } from 'vue-router'
import Homepage from './home/Home.vue';
import Login from './login/Login.vue';
import ToDo from './todo/ToDo.vue';
const routes = [
  {
    path: '/',
    component: Homepage
  }, {
    path: '/login/',
    component: Login
  }, {
    path: '/todo/',
    component: ToDo
  },
]
export default function (history) {
  return createRouter({
    history,
    routes
  })
}

# 表示させたい場所にrouter-viewを記載する(App.vue)
<router-view></router-view>
```

### ルーティングの作成
作成したルーティング定義を利用し、ルータオブジェクトをVueに組み込む
```bash
# main.js
// Add
import { createWebHistory } from 'vue-router'
import createRouter from './pages/routes.js'
const router = createRouter(createWebHistory())

loadFonts()

createApp(App)
  .use(vuetify)
  // Add
  .use(router)
  .mount('#app')
```

### ルーティングの使い方
- router-linkタグを埋め込む
```bash
<template>
  <router-link to="/page1">Page1へ遷移</router-link>
</template>
```

- スクリプト内でroute.push()を呼び出す
```bash
<script setup>

#  routerオブジェクトを利用可能にする必要がある
import { useRouter } from 'vue-router'
const router = useRouter()

function logoutbtn() {
  router.push('/');
}
</script>
```

## 共通事項
### カラーテーマ
src/plugins/vuetify.js参照

# ToDo
- ページ遷移の処理の共通化
  - スクリプトファイルにして各コンポーネントはimportできるのでは？
- 各ページの実装
  - それぞれReadme.mdページをつけた方が良さそう
  - ログイン：認証
  - API(http)呼び出し
- CI対応


# トラブルシュート
## Vite + Vuetify3が動かない
vue add vuetifyでVuetify 3 Preview(Vuetify3)をインストールしても動かない。  
vuetify本体がインストールされていなかった。
```bash
npm install vuetify@v3.0.0-beta.0
```
