
"use strict";

test("canvas task - creation", function() {
  var settings = {
    action: function () { return "test"; },
    test: 123
  };

  var task = new CanvasTask(settings);

  deepEqual(task.test, 123);

  deepEqual(task.action(), "test");
});

test("canvas task - executing action", function() {
  var result = null;
  var settings = {
    action: function ($this, canvas) { if (this.test === 123) result = canvas; },
    test: 123
  };

  var task = new CanvasTask(settings);

  deepEqual(task.test, 123);

  task.execute(null, "test2")
  deepEqual(result, "test2");

});

