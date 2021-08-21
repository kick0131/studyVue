// 最もシンプルなHTTPサーバ
// v3 urlの省略に対応
// v2 HTMLファイル参照
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  // リクエストURLの末尾がスラッシュならデフォルトファイル参照
  // そうでない場合はリクエストURLのファイルを参照
  // ex)
  // http://localhost:3000/
  var url = 'public' + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
  if (fs.existsSync(url)) {
    fs.readFile(url, (err, data) => {
      if (!err) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }
});

var port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log('To view your app, open this link in your browser: http://localhost:' + port);
});
