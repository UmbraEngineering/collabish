;require._modules["/common/handlebars-helpers/gravatar.js"] = (function() { var __filename = "/common/handlebars-helpers/gravatar.js"; var __dirname = "/common/handlebars-helpers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/handlebars-helpers/gravatar.js  == */ var __module__ = function() { 
 
var handlebars = require('handlebars');

handlebars.registerHelper('gravatar', function(hash, params) {
	params = params || '';

	// Default to identicons
	if (params.indexOf('d=') < 0) {
		params += (params.length ? '?' : '&') + 'd=identicon';
	}

	// Default to a rating of R or below
	if (params.indexOf('r=') < 0) {
		params += (params.length ? '?' : '&') + 'r=r';
	}

	return location.protocol + '//www.gravatar.com/avatar/' + hash + (params ? '?' + params : '');
});
 
 }; /* ==  End source for module /common/handlebars-helpers/gravatar.js  == */ return module; }());;