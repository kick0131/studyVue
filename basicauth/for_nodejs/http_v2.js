// 最もシンプルなHTTPサーバ
// v2 HTMLファイル参照
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  // リクエストURLのパスに対してサーバ側のpublic配下のファイルを参照
  // ex)
  // http://localhost:3000/index.html
  // -> public/index.htmlを参照
  var url = 'public' + req.url;
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
