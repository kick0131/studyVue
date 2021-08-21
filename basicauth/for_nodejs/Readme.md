# Basic認証
`このプロジェクトはVue.js未使用`

### ゴール
ブラウザからアクセスし、Basic認証のダイアログを表示し、  
認証OKの場合は成功画面に遷移する事

### 学習内容
- HTTPサーバ
- node.jsモジュールの基本操作
    - fs
    - http
- Basic認証

### ファイル説明
| ファイル名 | 説明 |
| -- | -- |
| http.js | nodeで動作する非常にシンプルなHTTPサーバ |
| basic.js | http.js + BASIC認証 |
| createUser.js | BASIC認証情報生成サンプル |

### 起動方法
```node.js
node basic.js
```
http.jsとbasic.jsは独立して動作する  
- Basic認証のアカウントは`admin/password`
- 認証範囲のパスは`public/menber/`

### 参考サイト

- [シンプルなHTTPサービスの作成](https://qiita.com/yamachan360/items/38a0d3c06eec1dfc3d6d)

- [Node.jsでbasic-auth-connectを使わずシンプルなBASIC認証を実装してみる](https://qiita.com/yamachan360/items/c9e5f7e1cf5913d37e41)

- [Node.js API](https://nodejs.org/api/http.html)
