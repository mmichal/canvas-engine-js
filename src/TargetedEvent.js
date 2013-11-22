
"use strict";

function TargetedEvent(settings) {
  this.init(settings);
  this.type = 'TargetedEvent';
}
TargetedEvent.prototype = new CanvasEvent();

