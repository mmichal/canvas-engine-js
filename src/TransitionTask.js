
"use strict";

function TransitionTask(settings) {
  this.timingFunction = null;
  this.step = 0;
  this.steps = 0;
  this.object = null;
  this.endObject = null;
  this.callback = null;

  this.init(settings);

  this.progress = 0;
  this.startValues = {};

  if (this.steps > 0) {
    this.interval = 1.0 / this.steps;
  }

  this.action = function (executor, canvas) {
    if (this.step !== this.steps) {

      if (this.timingFunction === null) {
        var $this = this;
        this.timingFunction = function (step) {
          return step;
        };
      }

      this.step++;
      var mul = this.timingFunction(this.step / this.steps);

      for (var property in this.endObject) {
        if (
          typeof this.object[property] === 'number' &&
          typeof this.endObject[property] === 'number'
        ) {
          if (this.progress === 0) {
            this.startValues[property] = this.object[property];
          }

          this.object[property] = this.startValues[property] +
            mul * (this.endObject[property] - this.startValues[property]);
        }
      }

      this.progress = mul;
    } else {
      for (var property in this.endObject) {
        if (
          typeof this.object[property] === 'number' &&
          typeof this.endObject[property] === 'number'
        ) {
          this.object[property] = this.endObject[property];
        }
      }

      if (this.callback) {
        this.callback.call(this);
      }

      executor.removeTask(this);
    }
  };
}
TransitionTask.prototype = new CanvasTask();

