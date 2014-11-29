;require._modules["/lib/rich-text/lib/type.js"] = (function() { var __filename = "/lib/rich-text/lib/type.js"; var __dirname = "/lib/rich-text/lib"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/rich-text/lib/type.js  == */ var __module__ = function() { 
 var Delta = require('./delta');


module.exports = {
  Delta: Delta,
  name: 'rich-text',
  uri: 'http://sharejs.org/types/rich-text/v1',

  create: function (initial) {
    return new Delta(initial);
  },

  apply: function (snapshot, delta) {
    snapshot = new Delta(snapshot);
    delta = new Delta(delta);
    return snapshot.compose(delta);
  },

  compose: function (delta1, delta2) {
    delta1 = new Delta(delta1);
    delta2 = new Delta(delta2);
    return delta1.compose(delta2);
  },

  diff: function (delta1, delta2) {
    delta1 = new Delta(delta1);
    delta2 = new Delta(delta2);
    return delta1.diff(delta2);
  },

  transform: function (delta1, delta2, side) {
    delta1 = new Delta(delta1);
    delta2 = new Delta(delta2);
    // Fuzzer specs is in opposite order of delta interface
    return delta2.transform(delta1, side === 'left');
  }
};
 
 }; /* ==  End source for module /lib/rich-text/lib/type.js  == */ return module; }());;