"use strict";

function RectangleObject(settings) {
  this.init(settings);
}
RectangleObject.prototype = new CanvasObject();

RectangleObject.prototype.render = function (canvas) {
  canvas.context.beginPath();
  canvas.context.moveTo(0, 0);

  canvas.context.lineTo(
    this.position.x + this.size.width,
    this.position.y
  );

  canvas.context.lineTo(
    this.position.x + this.size.width,
    this.position.y + this.size.height
  );

  canvas.context.lineTo(
    this.position.x,
    this.position.y + this.size.height
  );

  canvas.context.closePath();
};

