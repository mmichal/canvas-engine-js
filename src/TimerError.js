
"use strict";

/**
 * Creates a new TimerError instance.
 *
 * @this {TimerError}
 * @constructor
 */
function TimerError(message) {
  this.message = message;
}
TimerError.prototype = Object.create(Error.prototype)

