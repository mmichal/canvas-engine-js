
"use strict";

function CanvasEvent(settings) {
  this.init(settings);
}

CanvasEvent.prototype.init = function (settings) {
  utils.extend(this, settings);
};

