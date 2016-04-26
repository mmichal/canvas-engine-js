
"use strict";

function TextObject(settings) {
  CanvasObject.call(this, settings);
  this.text = '';
  this.init(settings);

}
TextObject.prototype = Object.create(CanvasObject.prototype);

TextObject.prototype.render = function (canvas) {
  canvas.context.textBaseline = 'bottom left';

  if (this.style.font) {
    canvas.context.font = this.style.font;
  }

  if (this.style.fillText) {
    canvas.context.fillText(
      this.text,
      0,
      0
    );
  }

  if (this.style.strokeText) {
    canvas.context.strokeText(
      this.text,
      0,
      0
    );
  }

};

