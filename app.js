var express = require('express');
var app = express();
var Caman = require('caman').Caman;
app.use('/static', express.static('public'));





app.get('/', function (req, res) {

    res.send(
        "<script src=\"//cdn.bootcss.com/jquery/2.2.1/jquery.js\"></script>"+
        "<script type=\"text/javascript\" src=\"https://cdnjs.cloudflare.com/ajax/libs/camanjs/4.1.2/caman.full.min.js\"></script>" +
        "<img id='kobe_img' " +
        "  src=\"/static/img/1.jpg\" \n" +
            // "  width=\"500\"\n" +
            // "  height=\"500\"\n" +
        ">" +
        // "<canvas id='kobe_canvas' width=\"554\" height=\"667\"></canvas>" +
        "<canvas id=\"canvas\" width=\"554\" height=\"667\"></canvas>"+
        "<input type='button' id='vintagebtn' value='vintagebtn'></input>"+
        "<button id =\"noisebtn\">Noise</button>"+
        "<button id =\"tiltshiftbtn\">Tilt Shift</button>" +
        "<script type=\"text/javascript\" src=\"/static/javascript/test.js\"></script>"
    )
    ;
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
