;require._modules["/common/handlebars-helpers/i18n.js"] = (function() { var __filename = "/common/handlebars-helpers/i18n.js"; var __dirname = "/common/handlebars-helpers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/handlebars-helpers/i18n.js  == */ var __module__ = function() { 
 
var i18n        = require('common/i18n');
var handlebars  = require('handlebars');

handlebars.registerHelper('i18n', function(label) {
	var args = Array.prototype.slice.call(arguments, 1);
	return new handlebars.SafeString(i18n.translate(label, args));
});
 
 }; /* ==  End source for module /common/handlebars-helpers/i18n.js  == */ return module; }());;