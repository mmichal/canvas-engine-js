function TestController(canvas, interval) {
  this.canvas = canvas;
  this.interval = interval;

  var testObject = new TestObject();

  this.canvas.addObject(testObject);
  this.canvas.setTimer(10);
  this.canvas.start();

  testObject.animate(
    {
    position: {
      x: 100,
    },

    style: {
      fill: {
        green: 0,
        red: 255
      },
      },
    transformation: {

      rotation: 0
    }
    },
    100,
    new Bezier(0,0,0.5,0.1,0.7,0.9,1,1),
    function () {
      console.log('finish');
    }
  );

}

