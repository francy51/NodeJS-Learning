var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
  console.log('Ctrl + C to exit the server');
});
