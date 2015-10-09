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

  this.transformation = {
    rotationCenter: {x: 50, y: 50},
    rotation: 1
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
  var $this = this;
  this.moveIdent = 0;

  this.on('MouseClickEvent', function(evt) {console.log(evt.x, evt.y, this)});
  this.on('TouchStartEvent', function(evt) {
    console.log(evt);
    evt.dispatcher.subscribeToTouchId(
      evt.changedTouches[0].identifier,
      $this
    );
    console.log(evt.changedTouches[0].identifier);

    $this.moveIdent = evt.changedTouches[0].identifier;
  });

  this.on('TouchLeaveEvent', function(evt) {
    console.log(evt);
  });

  this.on('TouchEndEvent', function(evt) {
    console.log(evt);
  });

 this.on('TouchCancelEvent', function(evt) {
    console.log(evt);
  });


  this.on('TouchMoveEvent', function(evt) {

    for (var ii = 0; ii < evt.changedTouches.length; ii++) {
      if (evt.changedTouches[ii].identifier == $this.moveIdent) {
        $this.position.x = evt.getRelativePosition(evt.changedTouches[ii]).x;
        $this.position.y = evt.getRelativePosition(evt.changedTouches[ii]).y;
      }

    }
  });


//  this.on('KeyDownEvent', function(evt) {$this.position.x += 10});

}
TestObject.prototype = new RectangleObject();

