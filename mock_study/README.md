## 基本情報

| 項目 | 値 |
|---------------|----|
| プロジェクト名 | tit-handbook-development|

---

### ビルド
```
yarn build
```

### デプロイ
バージョン名  : handbook-[Web App ProjectName]
```
gcloud app deploy --version handbook-mock --project tit-handbook-development --no-promote
```

### アクセスURL
```
https://tit-handbook-development.an.r.appspot.com/
```

### 課題
- コンテナイメージの掃除

### 参考
- Not work in Edge, error:'SCRIPT1028: SCRIPT1028: Expected identifier, string or number'
https://github.com/vuetifyjs/vuetify/issues/8279

