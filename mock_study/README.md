# SPAサンプル

### 基本操作
```bash
# ビルド
yarn build
# ローカルサーバ起動
yarn serve
```

### デプロイ
バージョン名  : sample-[Web App ProjectName]
```
gcloud app deploy --version sample-mock --project (PJ Name) --no-promote
```

### 課題
- コンテナイメージの掃除

### 参考
- Not work in Edge, error:'SCRIPT1028: SCRIPT1028: Expected identifier, string or number'
https://github.com/vuetifyjs/vuetify/issues/8279

