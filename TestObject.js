"use strict";

function TestObject(settings) {
  this.init(settings);
  this.position = {
    x: 30,
    y: 10,
    z: 0
  }

  this.size = {
    width: 100,
    height: 100
  }
  this.style = {
    stroke: {
      width: 2,
      red: 128,
      green: 255,
      blue: 128,
      opacity: 1
    },
    fill: {
      red: 128,
      green: 128,
      blue: 255,
      opacity: 1
    }

  }
  this.on('MouseClickEvent', function(evt) {console.log(evt.x);});

  var $this = this;
  this.on('KeyDownEvent', function(evt) {$this.position.x += 10});

}
TestObject.prototype = new RectangleObject();

