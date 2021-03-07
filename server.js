const http = require('http');
const fs = require('fs');
const { getPriority } = require('os');

const server = http.createServer(function (req, res) {
  console.log(req.url);

  let body = null;
  try {
    const ext = req.url.split('.')[1]
    const isSvg = ext === 'svg';
    if (isSvg) {
      res.setHeader('Content-Type', 'image/svg+xml');
    }
    body = fs.readFileSync(`.${req.url}`)
  } catch (err) {
    body = fs.readFileSync(`./index.html`)
  }

  res.end(body)
});

const port = process.env.PORT || 3000;
server.listen(port);


console.log('Server started!');
