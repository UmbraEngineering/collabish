;require._modules["/common/handlebars-helpers/encode.js"] = (function() { var __filename = "/common/handlebars-helpers/encode.js"; var __dirname = "/common/handlebars-helpers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/handlebars-helpers/encode.js  == */ var __module__ = function() { 
 
var handlebars = require('handlebars');

handlebars.registerHelper('encode', function(str) {
	return encodeURIComponent(str);
});
 
 }; /* ==  End source for module /common/handlebars-helpers/encode.js  == */ return module; }());;