;require._modules["/lib/handlebars/index.js"] = (function() { var __filename = "/lib/handlebars/index.js"; var __dirname = "/lib/handlebars"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/handlebars/index.js  == */ var __module__ = function() { 
 
module.exports = require('./runtime');
 
 }; /* ==  End source for module /lib/handlebars/index.js  == */ return module; }());;