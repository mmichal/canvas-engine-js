
"use strict";

function Canvas(canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.timer = null;

  this.tasks = [
    new CanvasTask({ action: function (canvas, $this) { canvas.draw(); } })
  ];

  this.objects = [];
}
Canvas.prototype = new CanvasObject();

Canvas.prototype.start = function () {
  if (this.timer) {
    this.timer.start();
  }
};

Canvas.prototype.stop = function () {
  if (this.timer) {
    this.timer.stop();
  }
};

Canvas.prototype.draw = function () {
  this.context.clearRect(0,0,this.canvas.width, this.canvas.height);

  for (var objectsKey = 0; objectsKey < this.objects.length; objectsKey++) {
    this.context.save();
    this.position(this.objects[objectsKey].position);
    this.transform(this.objects[objectsKey].transformation);
    this.objects[objectsKey].draw(this);
    this.context.restore();
  }
};

Canvas.prototype.setStyle = function (style) {
  if (style) {
    if (style.stroke) {
      this.context.lineWidth = style.stroke.width;
      this.context.strokeStyle =
        'rgba(' + style.stroke.red
        + ', ' + style.stroke.green
        + ', ' + style.stroke.blue
        + ', ' + style.stroke.opacity + ')';
    }

    if (style.fill) {
      this.context.fillStyle =
        'rgba(' + style.fill.red
        + ', ' + style.fill.green
        + ', ' + style.fill.blue
        + ', ' + style.fill.opacity + ')';
    }

    if (style.font) {
      this.context.font = "32pt Arial";
    }
  }
};

Canvas.prototype.display = function (style) {
  if (style) {
    if (style.stroke) {
      this.context.stroke();

    }
    if (style.fill) {
      this.context.fill();
    }
  }
};

Canvas.prototype.position = function (object) {
  if (object.x !== null && object.y !== null) {
    this.context.translate(object.x, object.y);
  }
};

Canvas.prototype.transform = function (transformation) {
  if (transformation) {
    if (transformation.scale) {
      this.context.scale(transformation.scale.x,transformation.scale.y);
    }

    if (transformation.rotationCenter) {
      this.context.translate(
        transformation.rotationCenter.x,
        transformation.rotationCenter.y
      );
    }

    if (transformation.rotation) {
      this.context.rotate(transformation.rotation);
    }

    if (transformation.rotationCenter) {
      this.context.translate(
        -transformation.rotationCenter.x,
        -transformation.rotationCenter.y
      );
    }

    if (transformation.translation) {
      this.context.translate(
        transformation.translation.x,
        transformation.translation.y
      );
    }
  }
};

Canvas.prototype.render = function(model) {
  switch (model.type) {
    case 'element':
      this.context.save();
      this.position(model);
      this.transform(model.transformation)
      for (var key in model.content) {
        this.render(model.content[key]);
      }
      this.context.restore();
      break;

    case 'rectangle':
      this.context.save();
      this.position(model);
      this.transform(model.transformation);
      this.setStyle(model.style);
      this.context.beginPath();
      this.context.moveTo(model.x,model.y);
      this.context.lineTo(model.x + model.width, model.y);
      this.context.lineTo(model.x + model.width, model.y+model.height);
      this.context.lineTo(model.x, model.y + model.height);
      this.context.closePath();
      this.display(model.style);
      this.context.restore();
      break;

    case 'text':
      this.context.save();
      this.position(model);
      this.transform(model.transformation);
      this.setStyle(model.style);
      this.context.textBaseline = 'bottom left';

      if (model.style.fill) {
        this.context.fillText(model.text, model.x, model.y);
      }
      if (model.style.stroke) {
        this.context.strokeText(model.text, model.x, model.y);
      }
      this.context.restore();
      break;

    case 'circle':
      this.context.save();
      this.position(model);
      this.transform(model.transformation);
      this.setStyle(model.style);
      this.context.beginPath();
      this.context.arc(
        model.x + model.radius,
        model.y + model.radius,
        model.radius,
        0,
        Math.PI*2,
        false
      );

      this.context.closePath();
      this.display(model.style);
      this.context.restore();
      break;

    case 'move':
      this.context.moveTo(model.x, model.y);
      break;

    case 'close':
      this.context.closePath();
      break;

    case 'line' :
      this.context.lineTo(model.x, model.y);
      break;

    case 'path':
      this.context.save();
      this.position(model);
      this.transform(model.transformation);
      this.setStyle(model.style);
      this.context.beginPath();

      for (var key in model.content) {
        this.render(model.content[key]);
      }

      this.display(model.style);
      this.context.restore();
      break;

    default:
      break;
  }
};

Canvas.prototype.setTimer = function (interval) {
  var $this = this;
  this.timer = new Timer(interval, function () { $this.step($this) });
};

