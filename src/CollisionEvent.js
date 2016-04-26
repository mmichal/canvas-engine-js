
"use strict";

function CollisionEvent(settings) {
  TargetedEvent.call(this, settings);
  this.object = null;
  this.init(settings);
  this.type = 'CollisionEvent';
}
CollisionEvent.prototype = Object.create(TargetedEvent.prototype);

