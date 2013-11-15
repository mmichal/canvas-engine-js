
"use strict";

function CircleObject(settings) {
  this.size = {
    radius: 0,
    z: 0
  }
  this.init(settings);
}
CircleObject.prototype = new CanvasObject();

CircleObject.prototype.render = function (canvas) {
  canvas.context.beginPath();
  canvas.context.arc(
    this.position.x + this.size.radius,
    this.position.y + this.size.radius,
      this.size.radius,
      0,
      Math.PI*2,
    false
  );

  canvas.context.closePath();
};

