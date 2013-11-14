
"use strict";

function KeyListener() {
  this.keyDownCallbacks = {};
  this.keyUpCallbacks = {};
}

KeyListener.prototype.addOnDown = function(keycode, callback) {
  this.keyDownCallbacks[keycode] = callback;
}

KeyListener.prototype.addOnUp = function(keycode, callback) {
  this.keyUpCallbacks[keycode] = callback;
}

KeyListener.prototype.startListening = function() {
  var $this = this
  document.onkeyup = function(evt) {$this.onUp(evt)};
  document.onkeydown = function(evt) {$this.onDown(evt)};
}

KeyListener.prototype.stopListening = function() {
  document.onkeyup = null;
  document.onkeydown = null;
}

KeyListener.prototype.onUp = function(evt) {
  evt = (evt) ? evt : ((window.event) ? event : null);
  if (evt) {
    if (this.keyUpCallbacks[evt.keyCode]) {
      this.keyUpCallbacks[evt.keyCode]();
    }
  }
}

KeyListener.prototype.onDown = function(evt) {
  //console.log(evt.keyCode);
  evt = (evt) ? evt : ((window.event) ? event : null);
  if (evt) {
    if (this.keyDownCallbacks[evt.keyCode]) {
      this.keyDownCallbacks[evt.keyCode]();
    }
  }
}

