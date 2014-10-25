;require._modules["/vendor/jquery.atwho/index.js"] = (function() { var __filename = "/vendor/jquery.atwho/index.js"; var __dirname = "/vendor/jquery.atwho"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /vendor/jquery.atwho/index.js  == */ var __module__ = function() { 
 
window.jQuery = require('jquery');

require('./jquery.caret');
require('./jquery.atwho');

window.jQuery = void(0);
delete window.jQuery;
 
 }; /* ==  End source for module /vendor/jquery.atwho/index.js  == */ return module; }());;