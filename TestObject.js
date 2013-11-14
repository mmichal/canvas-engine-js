"use strict";

function TestObject(settings) {
  this.init(settings);
  this.model = {
    type: 'rectangle',
    x: 0,
    y: 0,
    width: 200,
    height: 200,
    style: {
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

  }
}
TestObject.prototype = new CanvasObject();

