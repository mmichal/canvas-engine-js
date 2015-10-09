
"use strict";

function Canvas(canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.timer = null;

  this.globalX = 0;
  this.globalY = 0;

  this.tasks = [
    new CanvasTask({ action: function (canvas) { canvas.draw(); } })
  ];

  this.objects = [];

  this.eventDispatcher = new EventDispatcher(this);
  this.inputListener = new InputListener(this.canvas);

  var $this = this;

  this.inputListener.keyDownSignal.connect(
    function (keyCode) {
      $this.eventDispatcher.dispatch(new KeyDownEvent({ keyCode: keyCode }));
    },
    this
  );

  this.inputListener.keyUpSignal.connect(
    function (keyCode) {
      $this.eventDispatcher.dispatch(new KeyUpEvent({ keyCode: keyCode }));
    },
    this
  );

  this.inputListener.keyPressSignal.connect(
    function (keyCode) {
      $this.eventDispatcher.dispatch(new KeyPressEvent({ keyCode: keyCode }));
    },
    this
  );

  this.inputListener.mouseDownSignal.connect(
    function (x, y) {
      $this.eventDispatcher.dispatch(new MouseDownEvent({ x: x, y: y }));
    },
    this
  );

  this.inputListener.mouseUpSignal.connect(
    function (x, y) {
      $this.eventDispatcher.dispatch(new MouseUpEvent({ x: x, y: y }));
    },
    this
  );

  this.inputListener.mouseClickSignal.connect(
    function (x, y) {
      $this.eventDispatcher.dispatch(new MouseClickEvent({ x: x, y: y }));
    },
    this
  );

  this.inputListener.mouseDoubleClickSignal.connect(
    function (x, y) {
      $this.eventDispatcher.dispatch(new MouseDoubleClickEvent({ x: x, y: y }));
    },
    this
  );

  this.inputListener.mouseMoveSignal.connect(
    function (x, y) {
      $this.eventDispatcher.dispatch(new MouseMoveEvent({ x: x, y: y }));
    },
    this
  );

  this.inputListener.touchStartSignal.connect(
    function (
      changedTouches,
      targetTouches,
      touches,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    ) {
      $this.eventDispatcher.dispatch(
        new TouchStartEvent(
          {
            changedTouches: changedTouches,
            targetTouches: targetTouches,
            touches: touches,
            altKey: altKey,
            ctrlKey: ctrlKey,
            metaKey: metaKey,
            shiftKey: shiftKey
          }
        )
      );
    },
    this
  );

  this.inputListener.touchEndSignal.connect(
    function (
      changedTouches,
      targetTouches,
      touches,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    ) {
      $this.eventDispatcher.dispatch(
        new TouchEndEvent(
          {
            changedTouches: changedTouches,
            targetTouches: targetTouches,
            touches: touches,
            altKey: altKey,
            ctrlKey: ctrlKey,
            metaKey: metaKey,
            shiftKey: shiftKey
          }
        )
      );
    },
    this
  );

  this.inputListener.touchCancelSignal.connect(
    function (
      changedTouches,
      targetTouches,
      touches,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    ) {
      $this.eventDispatcher.dispatch(
        new TouchCancelEvent(
          {
            changedTouches: changedTouches,
            targetTouches: targetTouches,
            touches: touches,
            altKey: altKey,
            ctrlKey: ctrlKey,
            metaKey: metaKey,
            shiftKey: shiftKey
          }
        )
      );
    },
    this
  );

  this.inputListener.touchLeaveSignal.connect(
    function (
      changedTouches,
      targetTouches,
      touches,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    ) {
      $this.eventDispatcher.dispatch(
        new TouchLeaveEvent(
          {
            changedTouches: changedTouches,
            targetTouches: targetTouches,
            touches: touches,
            altKey: altKey,
            ctrlKey: ctrlKey,
            metaKey: metaKey,
            shiftKey: shiftKey
          }
        )
      );
    },
    this
  );

  this.inputListener.touchMoveSignal.connect(
    function (
      changedTouches,
      targetTouches,
      touches,
      altKey,
      ctrlKey,
      metaKey,
      shiftKey
    ) {
      $this.eventDispatcher.dispatch(
        new TouchMoveEvent(
          {
            changedTouches: changedTouches,
            targetTouches: targetTouches,
            touches: touches,
            altKey: altKey,
            ctrlKey: ctrlKey,
            metaKey: metaKey,
            shiftKey: shiftKey
          }
        )
      );
    },
    this
  );

  this.updatePosition();
}

Canvas.prototype = new CanvasObject();

Canvas.prototype.updatePosition = function () {
  var position = utils.getElementPosition(this.canvas);
  this.globalX = position.x;
  this.globalY = position.y;
}

Canvas.prototype.start = function () {
  if (this.timer) {
    this.timer.start();
  }
  this.inputListener.startListening();
};

Canvas.prototype.stop = function () {
  if (this.timer) {
    this.timer.stop();
  }
  this.inputListener.stopListening();
};

Canvas.prototype.draw = function () {
  this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

  for (var objectsKey = 0; objectsKey < this.objects.length; objectsKey++) {
    this.context.save();
    this.objects[objectsKey].draw(this);
    this.context.restore();
  }
};

Canvas.prototype.setStyle = function (style) {
  if (style) {
    if (style.stroke) {
      this.context.lineWidth = style.stroke.width;
      this.context.strokeStyle =
        'rgba(' + Math.round(style.stroke.red)
        + ', ' + Math.round(style.stroke.green)
        + ', ' + Math.round(style.stroke.blue)
        + ', ' + Math.round(style.stroke.opacity) + ')';
    }

    if (style.fill) {
      this.context.fillStyle =
        'rgba(' + Math.round(style.fill.red)
        + ', ' + Math.round(style.fill.green)
        + ', ' + Math.round(style.fill.blue)
        + ', ' + Math.round(style.fill.opacity) + ')';
    }

    if (style.font) {
      this.context.font = style.font;
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

Canvas.prototype.setTimer = function (interval) {
  var $this = this;
  this.timer = new Timer(interval, function () { $this.step($this) });
};

