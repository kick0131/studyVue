// 最もシンプルなHTTPサーバ
// v5 エラーコード対応
// v4 様々なコンテントタイプに対応
// v3 urlの省略に対応
// v2 HTMLファイル参照
var http = require('http');
var fs = require('fs');

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

// httpモジュール
// req : HTTPリクエスト情報
// res : HTTPレスポンス情報
var server = http.createServer(function (req, res) {
  var url = 'public' + (req.url.endsWith('/') ? req.url + 'index.html' : req.url);
  // existSync:ファイルが存在するかどうかをbooleanで返却
  if (fs.existsSync(url)) {
    // readFile: ファイル読み込み
    // 第1引数: ファイルパス
    // 第2引数: コールバック関数(エラーオブジェクト, 取得結果)
    fs.readFile(url, (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': getType(url) });
        // endでレスポンスを送信する、引数でボディを指定(省略可)
        res.end(data);
        console.log('== 200 OK.')
      } else {
        // Server Error
        console.log('== Server Error.')
        res.statusCode = 500;
        res.end();
      }
    });
  } else {
    // File Not Found
    console.log('== File Not Found.')
    res.statusCode = 404;
    res.end();
  }
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('To view your app, open this link in your browser: http://localhost:' + port);
});
