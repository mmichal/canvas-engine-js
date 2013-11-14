
"use strict";

function CanvasObject() {
  this.model = null;
  this.transformation = null;

  this.tasks = [];
  this.objects = [];
  this.position = {
    x: 0,
    y: 0,
    z: 0
  }
}

CanvasObject.prototype.init = function (settings) {
  utils.extend(this, settings);
};

CanvasObject.prototype.step = function (canvas) {
  for (var objectIndex = 0; objectIndex < this.objects.length; objectIndex++) {
    this.objects[objectIndex].step(canvas);
  }

  for (var taskIndex = 0; taskIndex < this.tasks.length; taskIndex++) {
    this.tasks[taskIndex].execute(canvas);
  }
};

CanvasObject.prototype.draw = function (canvas) {
  if (canvas) {
    canvas.render(this.model);
    for (var objectsKey = 0; objectsKey < this.objects.length; objectsKey++) {
      canvas.context.save();
      canvas.position(this.objects[objectsKey].position);
      canvas.transform(this.objects[objectsKey].transformation);

      this.objects[objectsKey].draw(canvas);

      canvas.context.restore();
    }

  } else {
    throw new CanvasObjectError('Canvas is null!');
  }
};

CanvasObject.prototype.addObject = function(object) {
  if (object instanceof CanvasObject) {
    this.objects.push(object);
  } else {
    throw 'Object is not a CanvasObject.';
  }
};

CanvasObject.prototype.addTask = function(task) {
  if (task instanceof CanvasTask) {
    this.tasks.push(task);
  } else {
    throw 'Tasks is not a CanvasTask.';
  }
};

CanvasObject.prototype.removeObject = function(object) {
  for (var key in this.objects) {
    if (this.objects[key] === object) {
      this.objects.splice(key, 1);
    }
  }
};

CanvasObject.prototype.removeTask = function(task) {
  for (var key in this.tasks) {
    if (this.tasks[key] === task) {
      this.tasks.splice(key, 1);
    }
  }
};

CanvasObject.prototype.clearObjects = function() {
  this.objects = [];
};

CanvasObject.prototype.clearTasks = function() {
  this.tasks = [];
};

