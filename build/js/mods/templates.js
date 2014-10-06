;require._modules["/mods/templates.js"] = (function() { var __filename = "/mods/templates.js"; var __dirname = "/mods"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /mods/templates.js  == */ var __module__ = function() { 
 
// 
// Modify the View::render function to consider strings in template
// properties to be a template path to be resolved
// 

var templates  = require('templates');
var View       = require('cloak/view');

var render = View.prototype.render;

View.prototype.render = function(data, templateProperty) {
	templateProperty = templateProperty || 'template';

	if (typeof this[templateProperty] === 'string') {
		this[templateProperty] = templates[this[templateProperty]];
	}

	return render.apply(this, arguments);
};
 
 }; /* ==  End source for module /mods/templates.js  == */ return module; }());;