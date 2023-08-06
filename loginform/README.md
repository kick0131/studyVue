# loginform
ログインフォームから受け付けたIDとパスワードを使って認証を行う  

1. Vueアプリはログイン画面を表示する
1. IDとパスワードを受けたログイン画面は認証サーバに認証APIを実行する
1. サンプルコードでは認証APIは必ず成功を返し、ダミーの認証トークンを返す
1. 正常応答を受けたVueアプリはトークンを保持し、トップ画面に遷移する
1. トップ画面からのログアウト操作で保持しているトークンを開放し、ログイン画面に遷移する

```bash
+------------+    +------------+
| Vue App    |    | node App   |
|  LoginPage |    |  authAPI   |
|  TopPage   |    |            |
| :8080      +----+ :8081      |
+------------+    +------------+
```

## 注意
まだ正しく動作できていないし、余計なコンポーネントがある
- ログインページからTopページに遷移できない
- 勉強用に比較したvueファイルが残っている
  - LoginForm_compositionAPI : compositionAPI形式で記載したログインフォーム
  - LoginForm_optionAPI : optionAPI形式で記載したログインフォーム

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

## ディレクトリ構成
```bash
dummyServer/
  index.js
  packagejson
```

## usage
dummyServer配下で実行する事
```bash
# 必要なモジュールのインストール
yarn init
yarn add express cors

# ダミーサーバ起動
node index.js
```

