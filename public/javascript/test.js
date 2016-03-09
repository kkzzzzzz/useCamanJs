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


var vintage = $('#vintagebtn');
var noise = $('#noisebtn');
var tiltshift = $('#tiltshiftbtn');
  
vintage.on('click', function(e) {
  Caman('#canvas', image, function() {
    var c = document.getElementById("canvas");
    var cxt = c.getContext("2d");
    cxt.drawImage(image, 0, 0);
    this.brightness(-10);
    this.newLayer(function () {
        this.setBlendingMode("overlay");
        this.opacity(100);
        this.fillColor('#689900');
        this.filter.brightness(15);
        this.filter.contrast(10);
    });
    this.render();   
  });
});
  
noise.on('click', function(e) {
  Caman('#canvas', image, function() {
    this.noise(10);
    this.render();
  });
});
  
tiltshift.on('click', function(e) {
  Caman('#canvas', image, function() {
    this.tiltShift({
      angle: 90,
      focusWidth: 600
    }).render();
  });
});

