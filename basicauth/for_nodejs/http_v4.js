// 最もシンプルなHTTPサーバ
// v4 様々なコンテントタイプに対応
// v3 urlの省略に対応
// v2 HTMLファイル参照
var http = require('http');
var fs = require('fs');

// 拡張子に応じたコンテントタイプを返却
function getType(_url) {
  var types = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "svg+xml"
  }
  for (var key in types) {
    if (_url.endsWith(key)) {
      return types[key];
    }
  }
  return "text/plain";
}

var server = http.createServer(function (req, res) {
  var url = 'public' + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
  if (fs.existsSync(url)) {
    fs.readFile(url, (err, data) => {
      if (!err) {
        // ファイルの拡張子に応じてコンテントタイプを設定
        // コンテントタイプが仮に間違ったとしても
        // 大抵ブラウザ側が上手いことやってくれるが、HTTPとしては間違っている
        res.writeHead(200, { 'Content-Type': getType(url) });
        res.end(data);
      }
    });
  }
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('To view your app, open this link in your browser: http://localhost:' + port);
});
