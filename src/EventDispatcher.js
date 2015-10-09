
"use strict";

function EventDispatcher(canvas) {
  this.canvas = canvas;
  this.touchSubscribers = {};
}

EventDispatcher.prototype.dispatch = function (evt) {
  if (evt instanceof CanvasEvent) {
    if (evt instanceof PointedEvent) {
      this.canvas.getObjectsAt(evt.x, evt.y).forEach(function (object) {
        object.handleEvent(evt);
      });
    } else if (evt instanceof TouchEvent) {
      evt.dispatcher = this;
      var notifiedObjects = [];
      for (
        var touchIndex = 0;
        touchIndex < evt.changedTouches.length;
        touchIndex++
      ) {
        this.canvas.getObjectsAt(
          evt.changedTouches[touchIndex].pageX - this.canvas.globalX,
          evt.changedTouches[touchIndex].pageY - this.canvas.globalY
        ).forEach(function (object) {
          object.handleEvent(evt);
          notifiedObjects.push(object);
        });

        var touchIdent = evt.changedTouches[touchIndex].identifier;

        if (touchIdent in this.touchSubscribers) {

          for (
            var subscriberIndex = 0;
            subscriberIndex < this.touchSubscribers[touchIdent].length;
            subscriberIndex++
          ) {
            var object = this.touchSubscribers[touchIdent][subscriberIndex];

            if (notifiedObjects.indexOf(object) < 0) {
              object.handleEvent(evt);
            }
          }

          if ((evt instanceof TouchEndEvent) || (evt instanceof TouchCancelEvent)) {
            delete this.touchSubscribers[touchIdent];
          }
        }
      }
    } else {
      this.canvas.handleEvent(evt);
    }
  } else {
    throw new EventDispatcherError("Can't dispatch ordinary object as event.");
  }
};

EventDispatcher.prototype.subscribeToTouchId = function (touchId, listener) {
  if (! touchId in this.touchSubscribers || this.touchSubscribers[touchId] === undefined) {
    this.touchSubscribers[touchId] = [];
  }

  if (this.touchSubscribers[touchId].indexOf(listener) < 0) {
    this.touchSubscribers[touchId].push(listener);
  }
};

EventDispatcher.prototype.unsubscribeFromTouchId = function (touchId, listener) {
  if (! touchId in this.touchSubscribers) {

    var index;

    if ((index = this.touchSubscribers[touchId].indexOf(listener)) >= 0) {
      delete this.touchSubscribers[touchId][index];
    }
  }
};

