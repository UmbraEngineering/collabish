;require._modules["/common/handlebars-helpers/arrays.js"] = (function() { var __filename = "/common/handlebars-helpers/arrays.js"; var __dirname = "/common/handlebars-helpers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/handlebars-helpers/arrays.js  == */ var __module__ = function() { 
 
var handlebars = require('handlebars');

handlebars.registerHelper('eachReverse', function(arr, opts) {
	var body = '';
	for (var i = arr.length - 1; i >= 0; i--) {
		body += opts.fn(arr[i]);
	}
	return body;
});
 
 }; /* ==  End source for module /common/handlebars-helpers/arrays.js  == */ return module; }());;