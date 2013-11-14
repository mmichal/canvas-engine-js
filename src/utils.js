
"use strict";

var utils = {
  clone: function (object) {
    var newObject;
    if (object instanceof Object) {
      newObject = new Object();
      for (var key in object) {
        if (object[key] instanceof Object){
          newObject[key] = Clone.clone(object[key]);
        } else {
          newObject[key] = object[key];
        }
      }
    } else {
      newObject = object;
    }

    return newObject;
  },

  extend: function (base, extension) {
    for (var key in extension) {
      base[key] = extension[key];
    }
  },

  loadData: function (url, callback) {
    try {
      var ajax = new XMLHttpRequest();
    } catch(e) {
      try {
        var ajax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
        try {
          var ajax = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e) {
          throw new ModelLoaderError("Your browser does not support AJAX!");
        }
      }
    }

    ajax.onreadystatechange = function () {
      if (ajax.readyState === 4) {
        if (ajax.status === 200) {
          callback(null, ajax.responseText);
        } else {
          callback(ajax.status, ajax.responseText);
        }
      }

    }
    self.ajax.open("GET", url, true);
    self.ajax.send();

  }

};
