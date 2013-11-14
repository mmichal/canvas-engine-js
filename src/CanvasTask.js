
"use strict";

function CanvasTask(settings) {
  this.action = null;
  this.init(settings);
}

CanvasTask.prototype.init = function (settings) {
  utils.extend(this, settings);
};

CanvasTask.prototype.execute = function (canvas) {
  if (this.action !== null) {
    this.action(canvas, this);
  }
};

