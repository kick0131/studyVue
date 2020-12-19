# routerandvuex

## **App.vue** Structure
| root | 2階層 | 3階層 | 説明 |
|:----|:----|:----|:----|
| Home.vue | | | |
| About.vue |  | | |
| Article.vue |  | | Router練習(親要素) |
| | ArticleSub.vue | | Router練習(子要素) |
|  |  | ArticlePage.vue | Router練習(孫要素) |
| Page1.vue |  |  | Router練習(Homeからの遷移先1) |
| Page2.vue |  |  | Router練習(Homeからの遷移先2) |
| Counter.vue |  |  | Vuexを使ったカウンタ |

---

### Vuex構成
index.jsから分割されたVuexモジュールをインポート
modules内にVuex定義を記載し、modules/index.jsでまとめてエクスポート

### 環境について
vue 2.x系

### 準備
```
yarn add vue-router
vue add vuex
```

### 使い方
```
yarn install
yarn serve
```

## ここで扱っている技術メモ
- アットマークで相対パスimport
```
★何か書く
```
- Prettierの設定
.prettierrcファイルを生成し、プロジェクトディレクトリ直下に配置
項目は以下URL参照
`http://json.schemastore.org/prettierrc`


## 公式
- Vue Router
https://router.vuejs.org/ja/installation.html

- Vuex
https://vuex.vuejs.org/ja/installation.html


