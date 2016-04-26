
"use strict";

function MouseMoveEvent(settings) {
  this.init(settings);
  this.type = 'MouseMoveEvent';
}
MouseMoveEvent.prototype = Object.create(PointedEvent.prototype);

