;require._modules["/vendor/foundation/index.js"] = (function() { var __filename = "/vendor/foundation/index.js"; var __dirname = "/vendor/foundation"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /vendor/foundation/index.js  == */ var __module__ = function() { 
 
window.jQuery = require('jquery');

require('./foundation');
require('./foundation.tooltip');

delete window.jQuery;
window.jQuery = void(0);
 
 }; /* ==  End source for module /vendor/foundation/index.js  == */ return module; }());;