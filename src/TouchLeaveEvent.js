
"use strict";

function TouchLeaveEvent(settings) {
  this.init(settings);
  this.type = 'TouchLeaveEvent';
}
TouchLeaveEvent.prototype = new TouchEvent();

