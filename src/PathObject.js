
"use strict";

function PathObject(settings) {
  this.steps = null;
  this.init(settings);

}
PathObject.prototype = new CanvasObject();

PathObject.prototype.render = function (canvas) {
  if (this.steps) {
    canvas.context.beginPath();
    this.steps.forEach(function (step) {
      switch (step.type) {
        case 'move':
          canvas.context.moveTo(step.x, step.y);
          break;
        case 'line':
          canvas.context.lineTo(step.x, step.y);
          break;
        case 'arc':
          canvas.context.arc(
            step.x,
            step.y,
            step.radius,
            step.startAngle,
            step.endAngle,
            step.anticlockwise
          );
          break;
        case 'arc':
          canvas.context.arc(
            step.x,
            step.y,
            step.radius,
            step.startAngle,
            step.endAngle,
            step.anticlockwise
          );
          break;
        case 'bezier':
          canvas.context.bezierCurveTo(
            step.cp1x,
            step.cp1y,
            step.cp2x,
            step.cp2y,
            step.x,
            step.y
          );
          break;
        case 'quadratic':
          canvas.context.quadraticCurveTo(
            step.cpx,
            step.cpy,
            step.x,
            step.y
          );
          break;
        case 'close':
          canvas.context.closePath();
          break;
        default:
          break;
      }
    }, this);
  }
};

