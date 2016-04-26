
"use strict";

function KeyDownEvent(settings) {
  this.init(settings);
  this.type = 'KeyDownEvent';
}
KeyDownEvent.prototype = Object.create(CanvasEvent.prototype);

