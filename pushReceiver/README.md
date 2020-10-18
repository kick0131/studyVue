# Destination Push Service
Web版のPush通知先プログラム

## Prepair
ServerWorker様のJavaScriptファイルを用意する
- public/firebase-messaging-sw.copy.jsからpublic/firebase-messaging-sw.jsを用意（ファイル名は固定）
- xxxxxの部分を自身のFirebaseのマイアプリの設定に割り当てる
  設定-全般-マイアプリ-Firebase SDK snippetの構成

## Project setup
```
yarn install
yarn build
yarn serve
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Lints and fixes files
```
yarn lint
```
