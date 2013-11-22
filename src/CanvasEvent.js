
"use strict";

function CanvasEvent(settings) {
  this.init(settings);
  this.type = null;
}

CanvasEvent.prototype.init = function (settings) {
  utils.extend(this, settings);
};

