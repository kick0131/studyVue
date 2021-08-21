// Basic認証付きページ
var http = require('http');
var fs = require('fs');

// Realm: 認証範囲と名称
var basic_realm = 'public/member/';
var basic_name = 'simple-nodejs_member';

// Basic認証アカウント群
// useID:passowrdをBase64エンコードしたもの
var accounts = [
  'YWRtaW46cGFzc3dvcmQ=' // admin:password
];

// 拡張子に応じたコンテントタイプを返却
function getType(_url) {
  var types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'svg+xml'
  };
  for (var key in types) {
    if (_url.endsWith(key)) {
      return types[key];
    }
  }
  return 'text/plain';
}

// ユーザ認証
function isUser(_auth) {
  for (var l = 0; l < accounts.length; l++) {
    if (accounts[l] == _auth) {
      return true;
    }
  }
  return false;
}

// サーバメイン処理
var server = http.createServer(function (req, res) {
  var url = 'public' + (req.url.endsWith('/') ? req.url + 'index.html' : req.url);
  // Realmの範囲かどうかをチェック
  if (url.startsWith(basic_realm)) {
    // 認証ヘッダが含まれているか
    var auth = req.headers['authorization'] || '';
    // isUser関数で認証ヘッダの部分の照合チェック
    if (!auth.startsWith('Basic ') || !isUser(auth.substring(6))) {
      // 401 UnAuthorized とBasic認証の要求ヘッダを応答
      res.statusCode = 401;
      res.setHeader('WWW-Authenticate', 'Basic realm="' + basic_name + '"');
      res.end();
    }
  }
  // writableEnded: request.endが実行された場合、true
  if (!res.writableEnded) {
    if (fs.existsSync(url)) {
      fs.readFile(url, (err, data) => {
        if (!err) {
          res.writeHead(200, { 'Content-Type': getType(url) });
          res.end(data);
          console.log('== 200 OK.');
        } else {
          // Server Error
          console.log('== Server Error.');
          res.statusCode = 500;
          res.end();
        }
      });
    } else {
      // File Not Found
      console.log('== File Not Found.');
      res.statusCode = 404;
      res.end();
    }
  }
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('To view your app, open this link in your browser: http://localhost:' + port);
});
