"use strict";

function MouseUpEvent(settings) {
  this.init(settings);
  this.type = 'MouseUpEvent';
}
MouseUpEvent.prototype = new PointedEvent();

