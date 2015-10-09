
"use strict";

function TextObject(settings) {
  this.text = '';
  this.init(settings);

}
TextObject.prototype = new CanvasObject();

TextObject.prototype.render = function (canvas) {
  canvas.context.textBaseline = 'bottom left';

  if (this.style.fill) {
    canvas.context.fillText(
      this.text,
      this.position.x,
      this.position.y
    );
  }

  if (this.style.stroke) {
    canvas.context.strokeText(
      this.text,
      this.position.x,
      this.position.y
    );
  }
};

