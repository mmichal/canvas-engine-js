"use strict";

function AudioSample(uri) {
  if (uri) {
    this.load(uri);
  } else {
    this.uri = null;
  }
}

AudioSample.prototype.load = function(uri) {
  this.uri = uri;

  this.audio = new Audio(this.uri);
}
