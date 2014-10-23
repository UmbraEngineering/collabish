;require._modules["/common/handlebars-helpers/icons.js"] = (function() { var __filename = "/common/handlebars-helpers/icons.js"; var __dirname = "/common/handlebars-helpers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/handlebars-helpers/icons.js  == */ var __module__ = function() { 
 
var handlebars  = require('handlebars');

handlebars.registerHelper('icon', function(icon) {
	return new handlebars.SafeString('<i class="fa fa-' + icon + '"></i>');
});
 
 }; /* ==  End source for module /common/handlebars-helpers/icons.js  == */ return module; }());;