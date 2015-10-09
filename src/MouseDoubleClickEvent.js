
"use strict";

function MouseDoubleClickEvent(settings) {
  this.init(settings);
  this.type = 'MouseDoubleClickEvent';
}
MouseDoubleClickEvent.prototype = new PointedEvent();

