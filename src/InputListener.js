
"use strict";

function InputListener(object) {
  this.object = object;

  this.keyDownSignal = new Signal();
  this.keyUpSignal = new Signal();
  this.keyPressSignal = new Signal();

  this.mouseDownSignal = new Signal();
  this.mouseUpSignal = new Signal();
  this.mouseClickSignal = new Signal();
  this.mouseDoubleClickSignal = new Signal();
  this.mouseMoveSignal = new Signal();

  this.listening = false;

  var $this = this;

  this.object.onkeyup = function(evt) {$this.onKeyUp(evt)};
  this.object.onkeydown = function(evt) {$this.onKeyDown(evt)};
  this.object.onkeydown = function(evt) {$this.onKeyDown(evt)};
  this.object.onkeypress = function(evt) {$this.onKeyPress(evt)};

  this.object.onmousedown = function(evt) {$this.onMouseDown(evt)};
  this.object.onmouseup = function(evt) {$this.onMouseUp(evt)};
  this.object.onmouseclick = function(evt) {$this.onMouseClick(evt)};
  this.object.onmousedblclick = function(evt) {$this.onMouseDoubleClick(evt)};
  this.object.onmousemove = function(evt) {$this.onMouseMove(evt)};


}

InputListener.prototype.startListening = function() {
  this.listening = true;
};

InputListener.prototype.stopListening = function() {
  this.listening = false;
};

InputListener.processEvent = function (evt) {
  if (this.listening) {
    evt = (evt) ? evt : ((window.event) ? event : null);
    return evt;
  }

  return null;
};

InputListener.prototype.onKeyUp = function (evt) {
  evt = InputListener.processEvent(evt);

  if (evt) {
    this.keyUpSignal.emit(evt.keyCode);
  }
};

InputListener.prototype.onKeyDown = function(evt) {
  evt = InputListener.processEvent(evt);

  if (evt) {
    this.keyDownSignal.emit(evt.keyCode);
  }
};

InputListener.prototype.onKeyPress = function(evt) {
  evt = InputListener.processEvent(evt);

  if (evt) {
    this.keyPressSignal.emit(evt.keyCode);
  }
};

InputListener.prototype.onMouseDown = function(evt) {
  evt = InputListener.processEvent(evt);

  if (evt) {
    this.mouseDownSignal.emit(evt.offsetX, evt.offsetY);
  }
};

InputListener.prototype.onMouseUp = function(evt) {
  evt = InputListener.processEvent(evt);

  if (evt) {
    this.mouseUpSignal.emit(evt.offsetX, evt.offsetY);
  }
};

InputListener.prototype.onMouseClick = function(evt) {
  evt = InputListener.processEvent(evt);

  if (evt) {
    this.mouseClickSignal.emit(evt.offsetX, evt.offsetY);
  }
};

InputListener.prototype.onMouseDoubleClick = function(evt) {
  evt = InputListener.processEvent(evt);

  if (evt) {
    this.mouseDoubleClickSignal.emit(evt.offsetX, evt.offsetY);
  }
};

InputListener.prototype.onMouseMove = function(evt) {
  evt = InputListener.processEvent(evt);

  if (evt) {
    this.mouseMoveSignal.emit(evt.offsetX, evt.offsetY);
  }
};

