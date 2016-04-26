
"use strict";

function TouchEvent(settings) {
  this.changedTouches = null;
  this.targetTouches = null;
  this.touches = null;
  this.ctrlKey = false;
  this.altKey = false;
  this.metaKey = false;
  this.shiftKey = false;

  this.init(settings);

  this.dispatcher = null;
  this.type = 'TouchEvent';
}
TouchEvent.prototype = Object.create(TargetedEvent.prototype);


TouchEvent.prototype.getRelativePosition = function(jsTouchEvent) {
  return {
    x: jsTouchEvent.pageX - this.dispatcher.canvas.globalX,
    y: jsTouchEvent.pageY - this.dispatcher.canvas.globalY
  };

}

