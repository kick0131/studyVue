# loginform

## Commands
### Project setup
```bash
# このプロジェクト自身の作成
vue create loginform

# 追加プラグインのインストール
yarn add vue-router@4
yarn add vuex@next --save
```

### Get start
```bash
# モジュールインストール
yarn install
# サーバ起動
yarn serve
# リビルド
yarn build
# 構文チェック
yarn lint
```

## 参考
- [Vuexのディレクトリ構成](https://vuex.vuejs.org/ja/guide/structure.html)
```bash
```

# dummyServer
ログイン画面テスト用の接続先サーバ

リクエストを受け付け、固定JSONのHTTP 200を返す

## usage
```bash
# 必要なモジュールのインストール
yarn init
yarn add express cors

# ダミーサーバ起動
node index.js
```

