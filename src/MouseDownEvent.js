"use strict";

function MouseDownEvent(settings) {
  this.init(settings);
}
MouseDownEvent.prototype = new PointedEvent();

