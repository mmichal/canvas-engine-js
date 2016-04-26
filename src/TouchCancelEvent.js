
"use strict";

function TouchCancelEvent(settings) {
  this.init(settings);
  this.type = 'TouchCancelEvent';
}
TouchCancelEvent.prototype = Object.create(TouchEvent.prototype);

