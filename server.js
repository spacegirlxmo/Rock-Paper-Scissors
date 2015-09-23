var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('/Users/MoniqueAruna/Projects/Punishment/public/index.html');
});

app.get('/punish', function (req, res) {
  res.sendFile('/Users/MoniqueAruna/Projects/Punishment/public/punish.html');
});

app.get('/rps', function (req, res) {
  res.sendFile('/Users/MoniqueAruna/Projects/Punishment/public/rps.html')
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
