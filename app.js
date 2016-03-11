var express = require('express');
var app = express();
var Caman = require('caman').Caman;
app.use('/static', express.static('public'));





app.get('/', function (req, res) {

    res.send(
        "<script src=\"//cdn.bootcss.com/jquery/2.2.1/jquery.js\"></script>"+
        "<script src=\"//cdn.bootcss.com/camanjs/4.1.2/caman.full.min.js\"></script>"+
        "<canvas id='1' width=\"554\" height=\"667\" ></canvas>" +
        "<canvas id='2' ></canvas>" +
        "<canvas id=\"canvas\" width=\"554\" height=\"667\"></canvas>"+
        "<input type='button' id='vintagebtn' value='vintagebtn'></input>"+
        "<script type=\"text/javascript\" src=\"/static/javascript/canvas.js\"></script>"
    )
    ;
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
