;require._modules["/vendor/stringformat/index.js"] = (function() { var __filename = "/vendor/stringformat/index.js"; var __dirname = "/vendor/stringformat"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /vendor/stringformat/index.js  == */ var __module__ = function() { 
 
require('./stringformat');

module.exports = window.stringformat;

window.stringformat = void(0);
delete window.stringformat;
 
 }; /* ==  End source for module /vendor/stringformat/index.js  == */ return module; }());;