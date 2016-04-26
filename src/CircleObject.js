
"use strict";

function CircleObject(settings) {
  CanvasObject.call(this, settings);
  this.radius = 0;
  this.init(settings);
}
CircleObject.prototype = Object.create(CanvasObject.prototype);

CircleObject.prototype.render = function (canvas) {
  canvas.context.beginPath();

  canvas.context.arc(
    this.radius,
    this.radius,
    this.radius,
    0,
    Math.PI*2,
    false
  );

  canvas.context.closePath();
};

