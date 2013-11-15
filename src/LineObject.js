"use strict";

function LineObject(settings) {
  this.to = {
    x: 0,
    y: 0
  };

  this.init(settings);

}
LineObject.prototype = new CanvasObject();

LineObject.prototype.render = function (canvas) {
  canvas.context.beginPath();
  canvas.context.moveTo(0, 0);
  canvas.context.lineTo(this.to.x, model.to.y);
};

