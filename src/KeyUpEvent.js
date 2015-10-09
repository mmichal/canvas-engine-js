
"use strict";

function KeyUpEvent(settings) {
  this.init(settings);
  this.type = 'KeyUpEvent';
}
KeyUpEvent.prototype = new CanvasEvent();

