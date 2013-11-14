
"use strict";

/**
 * Creates a new Timer instance
 *
 * @this {Timer}
 * @constructor
 * @param {number} interval in miliseconds
 * @param {function} callback step function
 *
 */
function Timer(interval, callback) {
  this.interval = interval;
  this.callback = callback;
  this.running = false;
}

Timer.prototype.step = function() {
  if (this.interval && this.callback) {
    if (this.running) {
      var $this = this;
      setTimeout( function() {
        $this.callback();
        $this.step();
      },
      this.interval);
    }
  } else {
    throw new TimerError("Interval or Callback is null");
  }

}

Timer.prototype.start =  function() {
  this.running = true;
  this.step();
}

Timer.prototype.stop =  function() {
  this.running = false;
}
