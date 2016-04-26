
"use strict";

function MouseDoubleClickEvent(settings) {
  this.init(settings);
  this.type = 'MouseDoubleClickEvent';
}
MouseDoubleClickEvent.prototype = Object.create(PointedEvent.prototype);

