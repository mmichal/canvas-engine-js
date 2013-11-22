"use strict";

function KeyDownEvent(settings) {
  this.init(settings);
  this.type = 'KeyDownEvent';
}
KeyDownEvent.prototype = new CanvasEvent();

