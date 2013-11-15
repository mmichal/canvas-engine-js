"use strict";

function MouseMoveEvent(settings) {
  this.init(settings);
}
MouseMoveEvent.prototype = new PointedEvent();

