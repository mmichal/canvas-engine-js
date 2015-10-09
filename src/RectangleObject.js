
"use strict";

function RectangleObject(settings) {
  this.init(settings);
}
RectangleObject.prototype = new CanvasObject();

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

