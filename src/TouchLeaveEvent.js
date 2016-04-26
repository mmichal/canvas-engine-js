
"use strict";

function TouchLeaveEvent(settings) {
  this.init(settings);
  this.type = 'TouchLeaveEvent';
}
TouchLeaveEvent.prototype = Object.create(TouchEvent.prototype);

