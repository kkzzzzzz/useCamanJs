var image = document.getElementById("kobe_img");
// var c = document.getElementById("kobe_canvas");
// var cxt = c.getContext("2d");
// cxt.drawImage(image, 0, 0);

// Caman("#kobe_canvas", image, function () {

//     this.brightness(-10);
//     this.newLayer(function () {
//         this.setBlendingMode("overlay");
//         this.opacity(100);
//         this.fillColor('#689900');
//         this.filter.brightness(15);
//         this.filter.contrast(10);
//     });
//     this.render();
// });

var mig1 = $('#1');
var mig2 = $('#2');
var bw = mig1.width();
var bh = mig1.height()


var s = Caman.Pixel.coordinatesToLocation(1,1,40);
console.log(s)
var i
var j
for(i=0;i<bh;i++){
  for(j=0;j<bw;j++){
    console.log();
  }
}

var c = $("#canvas");
var cxt = c.get(0).getContext("2d");
cxt.drawImage(mig1.get(0), 0, 0);

Caman.Filter.register("example", function (adjust) {
  this.process("example", function () {
    this.locationXY(); // e.g. {x: 0, y: 0}

    // Gets the RGBA object for the pixel that is 2 rows down
    // and 3 columns to the right.
    // this.getPixelRelative(-2, 3);

    // Sets the color for the pixel that is 2 rows down and
    // 3 columns to the right.
    this.putPixel(-2, 3, {
      r: 100,
      g: 120,
      b: 140,
      a: 255
    });

    // Gets the RGBA object for the pixel at the given absolute
    // coordinates. This is relative to the top left corner.
    this.getPixel(20, 50);

    // Sets the color for the pixel at the given absolute coordinates.
    // Also relative to the top left corner.
    this.putPixel(20, 50, {
      r: 100,
      g: 120,
      b: 140,
      a: 255
    });
  });
});


Caman.Filter.register("posterize", function (adjust) {
  // Pre-calculate some values that will be used
  var numOfAreas = 256 / adjust;
  var numOfValues = 255 / (adjust - 1);

  // Our process function that will be called for each pixel.
  // Note that we pass the name of the filter as the first argument.
  this.process("posterize", function (rgba) {
    rgba.r = Math.floor(Math.floor(rgba.r / numOfAreas) * numOfValues);
    rgba.g = Math.floor(Math.floor(rgba.g / numOfAreas) * numOfValues);
    rgba.b = Math.floor(Math.floor(rgba.b / numOfAreas) * numOfValues);
    rgba.a = 50;
    // Return the modified RGB values
    return rgba;
  });
});


$("#canvas").on('click',function(e){
  Caman("#canvas", mig1, function () {
    this.posterize(10);
    this.render();
  });
})
