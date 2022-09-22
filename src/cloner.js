window.clonerJS = {
  "cloneObj": function(obj) {
    var clone = {};
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    for(key of keys) {
      clone[key] = values[keys.indexOf(key)];
    }
    return clone;
  }

};
