
"use strict";

function EventDispatcher(canvas) {
  this.canvas = canvas;
}

EventDispatcher.prototype.dispatch = function (evt) {
  if (evt instanceof CanvasEvent) {
    if (evt instanceof PointedEvent) {
      this.canvas.getObjectsAt(evt.x, evt.y).forEach(function (object) {
        object.handleEvent(evt);
      });
    } else {
      this.canvas.handleEvent(evt);
    }
  } else {
    throw new EventDispatcherError("Can't dispatch any object as event");
  }
}

