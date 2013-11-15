"use strict";

function ImageObject(settings) {
  this.uri = null;
  this.loaded = false;
  this.image = null;
  this.init(settings);
  this.reload();

}
ImageObject.prototype = new CanvasObject();

ImageObject.prototype.reload = function () {
  this.loaded = false;

  if (this.uri) {
    if (!this.image) {
      this.image = new Image();
    }
    var $this = this;
    this.image.addEventListener('load', function (evt) {
      $this.loaded = true;
    });
    this.image.src = this.uri;
  }
}

ImageObject.prototype.render = function (canvas) {
  if (this.loaded) {
    canvas.context.drawImage(this.image, 0, 0);
  }
};

