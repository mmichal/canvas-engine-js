
"use strict";

function TouchStartEvent(settings) {
  this.init(settings);
  this.type = 'TouchStartEvent';
}
TouchStartEvent.prototype = new TouchEvent();

