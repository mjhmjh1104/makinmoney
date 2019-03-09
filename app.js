var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.redirect('/monero.html');
});

var PORT = process.env.PORT | 3000;
app.listen(PORT, function(req, res) {
  console.log('Server On!');
});
