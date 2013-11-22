
"use strict";

function CanvasObject() {
  this.transformation = null;
  this.style = null;

  this.tasks = [];
  this.objects = [];
  this.position = {
    x: 0,
    y: 0,
    z: 0
  };

  this.size = {
    width: 0,
    height: 0
  };
  this.eventHandlers = {};
}

CanvasObject.prototype.init = function (settings) {
  utils.extend(this, settings);
};

CanvasObject.prototype.on = function (eventType, callback) {
  this.eventHandlers[eventType] = callback;
};

CanvasObject.prototype.unsubscribe = function (eventType) {
  delete this.eventHandlers[eventType];
};

CanvasObject.prototype.handleEvent = function (evt) {
  if (evt.type in this.eventHandlers) {
    this.eventHandlers[evt.type].call(this, evt);
  }

  if (! (evt instanceof TargetedEvent)) {
    this.objects.forEach(function (object) {
      object.handleEvent(evt);
    });
  }
};

CanvasObject.prototype.init = function (settings) {
  utils.extend(this, settings);
};


CanvasObject.prototype.zSort = function () {
  this.objects.sort(function (object1, object2) {
    if (
      size in object1 &&
      size in object2 &&
      z in object1.size &&
      z in object2.size
    ) {
      return object1.size.z - object2.size.z;
    } else {
      return 0;
    }
  });
}

CanvasObject.prototype.step = function (canvas) {
  this.zSort();

  for (var objectIndex = 0; objectIndex < this.objects.length; objectIndex++) {
    this.objects[objectIndex].step(canvas);
  }

  for (var taskIndex = 0; taskIndex < this.tasks.length; taskIndex++) {
    this.tasks[taskIndex].execute(canvas);
  }
};

CanvasObject.prototype.draw = function (canvas) {
  if (canvas) {
    canvas.position(this.position);
    canvas.transform(this.transformation);
    canvas.setStyle(this.style);

    canvas.context.save();

    this.render(canvas);

    canvas.display(this.style);
    canvas.context.restore();

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

CanvasObject.prototype.render = function (canvas) {
};

CanvasObject.prototype.addObject = function (object) {
  if (object instanceof CanvasObject) {
    this.objects.push(object);
  } else {
    throw 'Object is not a CanvasObject.';
  }
};

CanvasObject.prototype.addTask = function (task) {
  if (task instanceof CanvasTask) {
    this.tasks.push(task);
  } else {
    throw 'Tasks is not a CanvasTask.';
  }
};

CanvasObject.prototype.removeObject = function (object) {
  for (var key in this.objects) {
    if (this.objects[key] === object) {
      this.objects.splice(key, 1);
    }
  }
};

CanvasObject.prototype.removeTask = function (task) {
  for (var key in this.tasks) {
    if (this.tasks[key] === task) {
      this.tasks.splice(key, 1);
    }
  }
};

CanvasObject.prototype.clearObjects = function () {
  this.objects = [];
};

CanvasObject.prototype.clearTasks = function () {
  this.tasks = [];
};

CanvasObject.prototype.getObjectsAt = function (x, y) {

  var result = [];
  this.objects.forEach(function (object) {
    if (
      object.position.x === x &&
      object.position.y === y ||
      object.size.width &&
      object.size.height &&
      x > object.position.x &&
      x <= object.size.width + object.position.x &&
      y > object.position.y &&
      y <= object.size.height + object.position.y
    ) {
      result.push(object);

      result = result.concat(object.getObjectsAt(
        x - object.position.x,
        y - object.position.y
      ));
    }
  });

  return result;
};

