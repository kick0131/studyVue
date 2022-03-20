const express = require('express');
const cors = require('cors');
const app = express();
// HTTP ReqでJSONを受け取れるようにする
app.use(express.json())

const users = {
  'hoge@hoge.com': {
    userId: 1,
    token: '1234567890abcdef'
  }
};

app.use(cors({
  origin: 'http://localhost:8080', // source url
  credentials: true,
  optionsSuccessStatus: 200
}))

app.post('/', (req, res) => {
  console.log('=== post called ===')
  console.log(req.body)
  res.send(users['hoge@hoge.com']);
});

app.delete('/', (req, res) => {
  res.send('Deleted.')
});

app.listen(8081, () => console.log('Listening on port 8081'));