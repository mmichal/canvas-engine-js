"use strict";

function MouseDownEvent(settings) {
  this.init(settings);
  this.type = 'MouseDownEvent';
}
MouseDownEvent.prototype = new PointedEvent();

