
"use strict";

test("canvas object - creation", function() {
  var object = new CanvasObject();

  deepEqual(object.transformation, null);
  deepEqual(object.position.x, 0);
  deepEqual(object.position.y, 0);
  deepEqual(object.position.z, 0);
  deepEqual(object.tasks, []);
  deepEqual(object.objects, []);

});

test("canvas object - initialization", function() {
  var settings = {
    position: {
      x: 10,
      y: 10,
      z: 1
    },
    test: 123

  };

  var object = new CanvasObject();
  object.init(settings);

  deepEqual(object.transformation, null);
  deepEqual(object.position.x, 10);
  deepEqual(object.position.y, 10);
  deepEqual(object.position.z, 1);
  deepEqual(object.tasks, []);
  deepEqual(object.objects, []);
  deepEqual(object.test,123);

});

test("canvas object - add object", function() {
  var settings = {
    position: {
      x: 10,
      y: 10,
      z: 1
    },
    test: 123

  };

  var parentObject = new CanvasObject();
  var childObject = new CanvasObject();

  childObject.init(settings);

  parentObject.addObject(childObject);

  var object = parentObject.objects[0];

  notEqual(object, null);

  deepEqual(object.transformation, null);
  deepEqual(object.position.x, 10);
  deepEqual(object.position.y, 10);
  deepEqual(object.position.z, 1);
  deepEqual(object.tasks, []);
  deepEqual(object.objects, []);
  deepEqual(object.test,123);

});

test("canvas object - remove object", function() {
  var settings = {
    position: {
      x: 10,
      y: 10,
      z: 1
    },
    test: 123

  };

  var parentObject = new CanvasObject();
  var childObject = new CanvasObject();

  childObject.init(settings);

  parentObject.addObject(childObject);

  var settings2 = {
    position: {
      x: 20,
      y: 20,
      z: 2
    },
    test: 1234

  };

  var childObject2 = new CanvasObject();

  childObject2.init(settings2);

  parentObject.addObject(childObject2);


  var object = parentObject.objects[0];

  notEqual(object, null);

  deepEqual(object.transformation, null);
  deepEqual(object.position.x, 10);
  deepEqual(object.position.y, 10);
  deepEqual(object.position.z, 1);
  deepEqual(object.tasks, []);
  deepEqual(object.objects, []);
  deepEqual(object.test,123);

  parentObject.removeObject(object);

  object = parentObject.objects[0];

  notEqual(object, null);

  deepEqual(object.transformation, null);
  deepEqual(object.position.x, 20);
  deepEqual(object.position.y, 20);
  deepEqual(object.position.z, 2);
  deepEqual(object.tasks, []);
  deepEqual(object.objects, []);
  deepEqual(object.test,1234);


});

test("canvas object - add task", function() {
  var settings = {
    action: function () { return "test"; },
    test: 123
  };

  var task = new CanvasTask(settings);

  deepEqual(task.test, 123);

  var object = new CanvasObject();
  object.addTask(task);

  deepEqual(object.tasks[0].test, 123);

});

test("canvas object - remove task", function() {
  var settings = {
    action: function () { return "test"; },
    test: 123
  };

  var task = new CanvasTask(settings);

  deepEqual(task.test, 123);

  var object = new CanvasObject();
  object.addTask(task);

  var settings2 = {
    action: function () { return "test"; },
    test: 1234
  };

  var task2 = new CanvasTask(settings2);

  deepEqual(task2.test, 1234);

  object.addTask(task2);

  object.removeTask(task);

  deepEqual(object.tasks[0].test, 1234);

});

test("canvas object - clear tasks", function() {
  var settings = {
    action: function () { return "test"; },
    test: 123
  };

  var task = new CanvasTask(settings);

  deepEqual(task.test, 123);

  var object = new CanvasObject();
  object.addTask(task);

  var settings2 = {
    action: function () { return "test"; },
    test: 1234
  };

  var task2 = new CanvasTask(settings2);

  deepEqual(task2.test, 1234);

  object.addTask(task2);

  object.clearTasks();

  deepEqual(object.tasks.length, 0);
});

test("canvas object - clear objects", function() {
 var settings = {
    position: {
      x: 10,
      y: 10,
      z: 1
    },
    test: 123

  };

  var parentObject = new CanvasObject();
  var childObject = new CanvasObject();

  childObject.init(settings);

  parentObject.addObject(childObject);

  var settings2 = {
    position: {
      x: 20,
      y: 20,
      z: 2
    },
    test: 1234

  };

  var childObject2 = new CanvasObject();

  childObject2.init(settings2);

  parentObject.addObject(childObject2);

  var object = parentObject.objects[0];

  notEqual(object, null);

  deepEqual(object.transformation, null);
  deepEqual(object.position.x, 10);
  deepEqual(object.position.y, 10);
  deepEqual(object.position.z, 1);
  deepEqual(object.tasks, []);
  deepEqual(object.objects, []);
  deepEqual(object.test,123);

  object.clearObjects();

  deepEqual(object.objects.length, 0);

});

test("canvas object - step", function () {
  var result = null;
  var settings = {
    action: function (canvas, $this) { if ($this.test === 123) result = canvas; },
    test: 123
  };

  var task = new CanvasTask(settings);

  deepEqual(task.test, 123);

  var object = new CanvasObject();
  object.addTask(task);

  object.step("test");

  deepEqual(result, "test");

});


