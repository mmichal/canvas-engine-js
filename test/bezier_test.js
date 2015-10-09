"use strict";

test("bezier - creation", function() {
  var object = new Bezier(0,0.5,1,1.5,2,2.5,3,4.5);

  deepEqual(object.x0, 0);
  deepEqual(object.y0, 0.5);
  deepEqual(object.x1, 1);
  deepEqual(object.y1, 1.5);
  deepEqual(object.x2, 2);
  deepEqual(object.y2, 2.5);
  deepEqual(object.x3, 3);
  deepEqual(object.y3, 4.5);

});

test("bezier - geting value", function() {
  deepEqual(Bezier.getValue(0, [0,1,2,3]), 0);
  deepEqual(Bezier.getValue(1, [0,1,1.5,3]), 3);

  deepEqual(Bezier.getValue(0.5, [0,1,2,3]), 1.5);
});

test("bezier - geting X value", function() {
  var object = new Bezier(0,0.5,1,1.5,2,2.5,3,4.5);

  deepEqual(object.getX(0.5), 1.5);
});

test("bezier - geting Y value", function() {
  var object = new Bezier(0.5,0,0.5,1,1.5,2,2.5,3);

  deepEqual(object.getY(0.5), 1.5);
});


