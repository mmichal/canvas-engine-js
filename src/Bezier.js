
"use strict"

function Bezier(x0, y0, x1, y1, x2, y2, x3, y3)
{
  this.x0 = x0;
  this.y0 = y0;
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.x3 = x3;
  this.y3 = y3;
}


Bezier.prototype.getX = function (t) {
  var args = [this.x0, this.x1, this.x2, this.x3];
  return Bezier.getValue(t, args);
};

Bezier.prototype.getY = function (t) {
  var args = [this.y0, this.y1, this.y2, this.y3];
  return Bezier.getValue(t, args);
};

Bezier.getValue = function (t, args) {
  return Math.pow(1 - t, 3) * args[0] +
    3 * Math.pow(1 - t, 2) * t * args[1] +
    3 * (1 - t) * Math.pow(t, 2) * args[2] +
    Math.pow(t, 3) * args[3];
};

