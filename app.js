var express = require('express');
var app = express();
var Caman = require('caman').Caman;
app.use('/static', express.static('public'));





app.get('/', function (req, res) {

    res.send(
        "<script src=\"//cdn.bootcss.com/jquery/2.2.1/jquery.js\"></script>"+
        "<script src=\"//cdn.bootcss.com/camanjs/4.1.2/caman.full.min.js\"></script>"+
        "<img id='1'  src=\"/static/img/1.jpg\">" +
        "<img id='2'  src=\"/static/img/2.png\">" +
        "<canvas id=\"canvas\" width=\"554\" height=\"667\"></canvas>"+
        "<script type=\"text/javascript\" src=\"/static/javascript/test.js\"></script>"
    )
    ;
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
