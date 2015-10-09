
"use strict";

function TouchEndEvent(settings) {
  this.init(settings);
  this.type = 'TouchEndEvent';
}
TouchEndEvent.prototype = new TouchEvent();

