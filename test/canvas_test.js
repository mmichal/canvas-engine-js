
"use strict";

function createMockCanvas() {
  return {
    getContext: function (kind) {
      if (kind === '2d') {
        return true;
      } else {
        return false;
      }
    },
    addEventListener: function (type, fun) {}
  };
}

test("canvas - creation", function() {
  var canvasObject = createMockCanvas();
  var canvas = new Canvas(canvasObject);

  deepEqual(canvas.canvas, canvasObject);

  deepEqual(canvas.context, true);
  deepEqual(canvas.tasks.length, 1);
});

test("canvas - setting timer", function() {
  var canvas = new Canvas(createMockCanvas());

  canvas.setTimer(10);

  notEqual(canvas.timer, null);
  deepEqual(canvas.timer.interval, 10);

});

