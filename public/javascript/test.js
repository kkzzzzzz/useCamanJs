
var image = document.getElementById("kobe_img");
var c = document.getElementById("kobe_canvas");
var cxt = c.getContext("2d");
cxt.drawImage(image,0,0);

Caman("#kobe_canvas", image, function () {
    this.brightness(-10);
    this.newLayer(function () {
        this.setBlendingMode("overlay");
        this.opacity(10);
        this.fillColor('#689900');
        this.filter.brightness(15);
        this.filter.contrast(10);
    });
    this.render();
});
