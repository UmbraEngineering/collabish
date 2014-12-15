;require._modules["/common/handlebars-helpers/index.js"] = (function() { var __filename = "/common/handlebars-helpers/index.js"; var __dirname = "/common/handlebars-helpers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/handlebars-helpers/index.js  == */ var __module__ = function() { 
 
require('./i18n');
require('./encode');
require('./moment');
require('./gravatar');
require('./icons');
require('./arrays');
 
 }; /* ==  End source for module /common/handlebars-helpers/index.js  == */ return module; }());;