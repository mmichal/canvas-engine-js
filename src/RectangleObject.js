
"use strict";

function RectangleObject(settings) {
  CanvasObject.call(this, settings);
  this.init(settings);
}
RectangleObject.prototype = Object.create(CanvasObject.prototype);

RectangleObject.prototype.render = function (canvas) {
  canvas.context.beginPath();
  canvas.context.moveTo(0, 0);

  canvas.context.lineTo(
    this.size.width,
    0
  );

  canvas.context.lineTo(
    this.size.width,
    this.size.height
  );

  canvas.context.lineTo(
    0,
    this.size.height
  );

  canvas.context.closePath();
};

