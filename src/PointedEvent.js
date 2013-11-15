
"use strict";

function PointedEvent(settings) {
  this.x = 0;
  this.y = 0;
  this.init(settings);
}
PointedEvent.prototype = new TargetedEvent();

