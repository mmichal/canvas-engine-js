"use strict";

function MouseClickEvent(settings) {
  this.init(settings);
}
MouseClickEvent.prototype = new PointedEvent();

