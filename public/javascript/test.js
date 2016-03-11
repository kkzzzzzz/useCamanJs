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
var mig1Ctx = mig1.get(0).getContext("2d");
var img = new Image();
img.src = '/static/img/1.jpg';
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  mig1Ctx.drawImage(img, 0, 0, img.width, img.height);
}


var mig2 = $('#2');
var mig2Ctx = mig2.get(0).getContext("2d");




// var c = $("#canvas");
// var cxt = c.get(0).getContext("2d");
// cxt.drawImage(mig1.get(0), 0, 0);

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
    rgba.a = 128;
    // Return the modified RGB values
    return rgba;
  });
});


img = new Image();
img.src = '/static/img/2.png';
img.onload = function() {
  canvas.width = img.width;
  canvas.height = img.height;
  mig2Ctx.drawImage(img, 0, 0, img.width, img.height);
}

var smallWidth  = img.width
var smallHeight = img.width

var c = $("#canvas");
var cxt = c.get(0).getContext("2d");
cxt.drawImage(mig1.get(0), 0, 0);

$("#vintagebtn").on('click',function (e) {

  var i;
  var j;
  for(i = 0; i< smallWidth; i++){
    for(j = 0; j< smallWidth; j++){
        var sData = mig2Ctx.getImageData(i,j,0,0);
        var bData = mig1Ctx.getImageData(i,j,0,0);

        cxt.putImageData(mix(sData,bData),0,0)
    }
  }

  sData = mig2Ctx.getImageData(0,0,smallWidth,smallWidth)

  mydata=mig1Ctx.getImageData(100,100,200,200)
  for (var i=0;i<mydata.data.length;i+=4){

    console.log(mydata.data[i+3]);
    mydata.data[i+3]=50
  }
  cxt.putImageData(mydata,100,100)
  // mydata=cxt.getImageData(40,40,20,20)
  // for (var i=0;i<1600;i+=4){
  //   mydata.data[i+3]=128
  // }
  // cxt.putImageData(mydata,20,20)

})

function mix(sData,bData) {
  return [
    sData[0]+bDate[0],
    sData[1]+bDate[1],
    sData[2]+bDate[2],
    125
    ]
}


//
// $("#canvas").on('click',function(e){
//   Caman("#canvas", mig1, function () {
//     this.posterize(10);
//     this.render();
//   });
// })
