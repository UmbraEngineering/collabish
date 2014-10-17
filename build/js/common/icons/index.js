;require._modules["/common/icons/index.js"] = (function() { var __filename = "/common/icons/index.js"; var __dirname = "/common/icons"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/icons/index.js  == */ var __module__ = function() { 
 
var $ = require('jquery');

$.fn.icon = function(icon, opts) {
	var $icon = this;

	opts = opts || { };

	if (! icon) {
		$icon.animate({ opacity: 0 }, 500, function() {
			$icon[0].className = '';
			$icon.css({
				opacity: 1
			});
		});
		return this;
	}

	$icon[0].className = 'fa fa-' + icon + (opts.spin ? ' fa-spin' : '');
	
	if (opts.color) {
		$icon.css('color', opts.color);
	}

	return this;
};
 
 }; /* ==  End source for module /common/icons/index.js  == */ return module; }());;