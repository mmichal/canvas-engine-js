
"use strict";

function TargetedEvent(settings) {
  CanvasEvent.call(this,settings);
  this.init(settings);
  this.type = 'TargetedEvent';
}
TargetedEvent.prototype = Object.create(CanvasEvent.prototype);

