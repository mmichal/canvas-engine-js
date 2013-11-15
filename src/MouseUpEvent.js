"use strict";

function MouseUpEvent(settings) {
  this.init(settings);
}
MouseUpEvent.prototype = new PointedEvent();

