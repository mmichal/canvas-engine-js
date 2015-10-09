
"use strict";

function Signal () {
  this.slots = [];
}

Signal.prototype.connect = function (slot, object) {
  this.slots.push( {
    object: object,
    slot: slot
  });
}

Signal.prototype.disconnect = function(slot, object) {
  for (var key in this.slots) {
    if (this.slots[key].object === object) {
      if (slot) {
        if (this.slots[key].slot === slot) {
          this.slots.splice(key, 1);
          return;
        }
      } else {
        this.slots.splice(key, 1);
      }
    } else if (slot && this.slots[key].slot === slot) {
      this.slots.splice(key, 1);
    }
  }

}

Signal.prototype.emit = function () {
  for (var key in this.slots) {
    if (this.slots[key].object) {
      this.slots[key].slot.apply(this.slots[key].object, arguments);
    } else {
      this.slots[key].slot.apply(this.slots[key].slot, arguments);
    }
  }
}

