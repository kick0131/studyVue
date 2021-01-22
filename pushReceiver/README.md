# Destination Push Service
Web版のPush通知先プログラム

## Prepair
ServerWorker用のJavaScriptファイルを用意する
- public/firebase-messaging-sw.jsを用意（ファイル名は固定）
- xxxxxの部分を自身のFirebaseのマイアプリの設定に割り当てる
  設定-全般-マイアプリ-Firebase SDK snippetの構成

## Project setup
ServiceWorkerはバックグラウンドでPush通知を受診するために必要。
ServiceWorkerを起動するためにローカル起動時にはdistファイルが必要。
Push通知側はサーバ起動時後、コンソールログに出力される登録トークンを使用する。
```
yarn install
yarn build
yarn serve
```
### Add libralies
トピックの登録にFirebase Admin SDKが必要だが、サーバサイドでのみ利用可能なので以下は禁止(NG)
```
yarn add firebase-admin
```

