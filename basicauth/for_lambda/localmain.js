const index = require('./index.js');

// ------------------------------------------------------------------
// ほぼfor_nodejsからの流用
// ------------------------------------------------------------------
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

// URLで指定したパスのファイルを表示する
function viewpage(url, res) {
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

// サーバメイン処理
var server = http.createServer(function (req, res) {
  console.log('call createServer');
  var url = 'public' + (req.url.endsWith('/') ? req.url + 'index.html' : req.url);
  console.log(url);
  // Realmの範囲かどうかをチェック
  if (url.startsWith(basic_realm)) {
    console.log('== 入力時のBasic認証情報 : ' + req.headers.authorization);

    // ハンドラ関数が期待している型に合わせて情報を設定
    const event = {
      Records: [
        {
          cf: {
            request: {
              headers: {
                // Basic認証情報
                authorization: [{ value: req.headers.authorization }]
              }
            }
          }
        }
      ]
    };
    // 未使用
    const context = {
      test: 'hoge'
    };
    // Basic認証処理(Lambdaハンドラ)に渡すコールバック関数
    // 引数arg2は以下が設定される
    //
    // 認証成功時:リクエストボディ(createServerの引数reqをそのまま設定している)
    // 認証失敗時:レスポンスボディの情報
    function callback(arg1, arg2) {
      console.log('call callback arg1:' + arg1);
      console.log('writableEnded : ' + res.writableEnded);

      if (!res.writableEnded) {
        if (arg1) {
          // 認証OK時
          var url = 'public' + (req.url.endsWith('/') ? req.url + 'index.html' : req.url);
          viewpage(url, res);
        } else {
          // 認証NG時
          // 401 UnAuthorized とBasic認証の要求ヘッダを応答
          res.statusCode = Number(arg2.status);
          res.statusDescription = arg2.statusDescription;
          res.setHeader('WWW-Authenticate', 'Basic realm="' + basic_name + '"');
          res.end();
        }
      }
    }
    // モジュール化したBasic認証部分の呼び出し
    console.log('call handler');
    index.handler(event, context, callback);
  } else {
    console.log('認証範囲外');
    viewpage(url, res);
  }
});

// サーバ待ち受け
var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('To view your app, open this link in your browser: http://localhost:' + port);
});
