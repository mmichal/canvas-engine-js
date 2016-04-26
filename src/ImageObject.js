
"use strict";

function ImageObject(settings) {
  CanvasObject.call(this, settings);

  this.uri = null;
  this.loaded = false;
  this.image = null;
  this.init(settings);
  this.reload();
  this.loadedSignal = new Signal();
}

ImageObject.prototype = Object.create(CanvasObject.prototype);

ImageObject.prototype.reload = function () {
  this.loaded = false;

  if (this.uri) {
    if (!this.image) {
      this.image = new Image();
    }
    var $this = this;
    this.image.addEventListener('load', function (evt) {
      $this.loaded = true;
      $this.loadedSignal.emit($this);
    });

    this.image.src = this.uri;
  }
}

ImageObject.prototype.render = function (canvas) {
  if (this.loaded) {
    canvas.context.drawImage(this.image, 0, 0);
  }
};

