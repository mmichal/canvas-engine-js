"use strict";

function createTransitionTask() {
  return new TransitionTask({
    properties: ['test1', 'test2'],
    timingFunction: null,
    object: {
      test1: 0,
      test2: 1,
      test3: 0,
    },
    endObject: {
      test1: 2,
      test2: 2,
    },
    steps: 10,
  });
}

test("transition task - creation", function() {
  var task = createTransitionTask();

  deepEqual(task.properties, ['test1', 'test2']);
  deepEqual(task.timingFunction, null);
  deepEqual(task.steps, 10);
  deepEqual(task.object, {test1:0, test2:1, test3:0});
  deepEqual(task.endObject, {test1:2, test2:2});
});

test("transition task - transition", function() {
  var task = createTransitionTask();

  deepEqual(task.properties, ['test1', 'test2']);
  deepEqual(task.timingFunction, null);
  deepEqual(task.steps, 10);
  deepEqual(task.object, {test1:0, test2:1, test3:0});
  deepEqual(task.endObject, {test1:2, test2:2});

  var object = task.object;

  task.execute({}, {removeTask: function () {}});
 // task.execute({}, {removeTask: function () {}});

  deepEqual(task.properties, ['test1', 'test2']);
  notDeepEqual(task.timingFunction, null);
  deepEqual(task.steps, 10);
  deepEqual(task.step, 1);
  deepEqual(task.object, {test1:0.2, test2:1.1, test3:0});
  deepEqual(task.endObject, {test1:2, test2:2});


});

