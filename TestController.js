function TestController(canvas, interval) {
  this.canvas = canvas;
  this.interval = interval;

  this.canvas.addObject(new TestObject());
  this.canvas.setTimer(10);
  this.canvas.start();

}

