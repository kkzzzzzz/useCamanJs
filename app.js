var express = require('express');
var app = express();
var Caman = require('caman').Caman;
app.use('/static', express.static('public'));





app.get('/', function (req, res) {

  res.send("<img id='img'" +
                "  src=\"/static/img/1.jpg\" \n" +
                "  data-camanwidth=\"500\"\n" +
                "  data-camanheight=\"500\"\n" +
                ">"+
              "<script type=\"text/javascript\" src=\"/static/javascript/test.js\"></script>");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
