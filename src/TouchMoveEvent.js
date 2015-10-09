
"use strict";

function TouchMoveEvent(settings) {
  this.init(settings);
  this.type = 'TouchMoveEvent';
}
TouchMoveEvent.prototype = new TouchEvent();

