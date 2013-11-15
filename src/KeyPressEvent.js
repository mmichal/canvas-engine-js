"use strict";

function KeyPressEvent(settings) {
  this.init(settings);
}
KeyPressEvent.prototype = new CanvasEvent();

