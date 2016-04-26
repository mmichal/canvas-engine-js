
"use strict";

function MouseClickEvent(settings) {
  this.init(settings);
  this.type = 'MouseClickEvent';
}
MouseClickEvent.prototype = Object.create(PointedEvent.prototype);

