"use strict";

function KeyPressEvent(settings) {
  this.init(settings);
  this.type = 'KeyPressEvent';
}
KeyPressEvent.prototype = new CanvasEvent();

