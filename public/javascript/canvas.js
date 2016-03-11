
function mix( sData, bData) {
  console.log(sData[0]);
  console.log(sData[1]);
  console.log(sData[2]);
  console.log(sData[3]);
  console.log(bData[0]);
  console.log(bData[1]);
  console.log(bData[2]);
  console.log(bData[3]);
  return [
    sData[0]+bData[0],
    sData[1]+bData[1],
    sData[2]+bData[2],
    125
    ]
}

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
var img2 = new Image();
img2.src = '/static/img/2.png';
img2.onload = function() {
  canvas.width = img2.width;
  canvas.height = img2.height;
  mig2Ctx.drawImage(img2, 0, 0, img2.width, img2.height);
}

var smallWidth  = img2.width
var smallHeight = img2.width



$("#vintagebtn").on('click',function (e) {


  var c = $("#canvas");
  var cxt = c.get(0).getContext("2d");
  // cxt.drawImage(mig1.get(0), 0, 0);


  var i;
  var j;
  for(i = 0; i< 10; i++){
    for(j = 0; j< 10; j++){
        var sData = mig2Ctx.getImageData(i,j,1,1);
        var bData = mig1Ctx.getImageData(i,j,1,1);
        var imgData = cxt.createImageData(1,1);
        imgData.data[0] = sData.data[0]*0.5+bData.data[0]*0.5,
        imgData.data[1] = sData.data[1]*0.5+bData.data[1]*0.5,
        imgData.data[2] = sData.data[2]*0.5+bData.data[2]*0.5,
        imgData.data[3] = 125;
        console.log(imgData);
        cxt.putImageData(imgData,1,1)
    }
  }

  // sData = mig2Ctx.getImageData(0,0,smallWidth,smallWidth)
  //
  // mydata=mig1Ctx.getImageData(100,100,200,200)
  // for (var i=0;i<mydata.data.length;i+=4){
  //
  //   console.log(mydata.data[i+3]);
  //   mydata.data[i+3]=50
  // }
  // cxt.putImageData(mydata,100,100)
  // mydata=cxt.getImageData(40,40,20,20)
  // for (var i=0;i<1600;i+=4){
  //   mydata.data[i+3]=128
  // }
  // cxt.putImageData(mydata,20,20)

})


//
// $("#canvas").on('click',function(e){
//   Caman("#canvas", mig1, function () {
//     this.posterize(10);
//     this.render();
//   });
// })
