"use strict";

function CollisionDetectionTask(settings) {

  CanvasTask.call(this, settings);

  this.objects = []

  var $this = this;

  this.action = function(executor, canvas, interval) {

    for (
      var firstIndex = 0;
      firstIndex < $this.objects.length;
      firstIndex++
    ) {
      for (
        var secondIndex = firstIndex + 1;
        secondIndex < $this.objects.length;
        secondIndex++
      ) {
        var first = this.objects[firstIndex];
        var second = this.objects[secondIndex];

        if (first !== second) {
          if (
            first.position.x >= second.position.x &&
            first.position.y >= second.position.y &&
            first.position.x <= second.position.x + second.size.width &&
            first.position.y <= second.position.y + second.size.height ||
            first.position.x + first.size.width >= second.position.x &&
            first.position.y >= second.position.y &&
            first.position.x + first.size.width <= second.position.x + second.size.width &&
            first.position.y <= second.position.y + second.size.height ||
            first.position.x + first.size.width >= second.position.x &&
            first.position.y + first.size.height >= second.position.y &&
            first.position.x + first.size.width <= second.position.x + second.size.width &&
            first.position.y + first.size.height <= second.position.y + second.size.height ||
            first.position.x >= second.position.x &&
            first.position.y + first.size.height >= second.position.y &&
            first.position.x <= second.position.x + second.size.width &&
            first.position.y + first.size.height <= second.position.y + second.size.height ||
            second.position.x >= first.position.x &&
            second.position.y >= first.position.y &&
            second.position.x <= first.position.x + first.size.width &&
            second.position.y <= first.position.y + first.size.height ||
            second.position.x + second.size.width >= first.position.x &&
            second.position.y >= first.position.y &&
            second.position.x + second.size.width <= first.position.x + first.size.width &&
            second.position.y <= first.position.y + first.size.height ||
            second.position.x + second.size.width >= first.position.x &&
            second.position.y + second.size.height >= first.position.y &&
            second.position.x + second.size.width <= first.position.x + first.size.width &&
            second.position.y + second.size.height <= first.position.y + first.size.height ||
            second.position.x >= first.position.x &&
            second.position.y + second.size.height >= first.position.y &&
            second.position.x <= first.position.x + first.size.width &&
            second.position.y + second.size.height <= first.position.y + first.size.height


          ) {
            first.handleEvent(new CollisionEvent({object: second}));
            second.handleEvent(new CollisionEvent({object: first}));
          }
        }
      }
    }
  }

}

CollisionDetectionTask.prototype = Object.create(CanvasTask.prototype);

CollisionDetectionTask.prototype.addObject = function(object) {
  this.objects.push(object);
}

CollisionDetectionTask.prototype.removeObject = function(object) {
  this.objects.splice(this.objects.indexOf(object), 1);
}

