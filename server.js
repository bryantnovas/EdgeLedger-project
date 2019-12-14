var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 80;

app.use(express.static('public'))
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);