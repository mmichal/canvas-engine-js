
"use strict";

function CircleObject(settings) {
  this.radius = 0;
  this.init(settings);
}
CircleObject.prototype = new CanvasObject();

CircleObject.prototype.render = function (canvas) {
  canvas.context.beginPath();
  canvas.context.arc(
    this.position.x + this.radius,
    this.position.y + this.radius,
    this.radius,
    0,
    Math.PI*2,
    false
  );

  canvas.context.closePath();
};

