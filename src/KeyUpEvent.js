
"use strict";

function KeyUpEvent(settings) {
  this.init(settings);
  this.type = 'KeyUpEvent';
}
KeyUpEvent.prototype = Object.create(CanvasEvent.prototype);

