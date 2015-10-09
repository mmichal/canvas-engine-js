
"use strict";

function TouchCancelEvent(settings) {
  this.init(settings);
  this.type = 'TouchCancelEvent';
}
TouchCancelEvent.prototype = new TouchEvent();

