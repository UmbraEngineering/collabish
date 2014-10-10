;require._modules["/vendor/purl/index.js"] = (function() { var __filename = "/vendor/purl/index.js"; var __dirname = "/vendor/purl"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /vendor/purl/index.js  == */ var __module__ = function() { 
 
require('./purl');

module.exports = window.purl;

window.purl = void(0);
delete window.purl;
 
 }; /* ==  End source for module /vendor/purl/index.js  == */ return module; }());;