;require._modules["/mods/spin.js"] = (function() { var __filename = "/mods/spin.js"; var __dirname = "/mods"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /mods/spin.js  == */ var __module__ = function() { 
 
var $ = require('jquery');

// 
// Display a spinner in the element
// 
$.fn.spin = function(onOff, opts) {
	opts = opts || { };
	var $elem = $(this[0]);

	// Turn on the spinner
	if (onOff) {
		if (opts.replace) {
			$elem.data('spinner-content', elem.innerHTML);
			$elem.html('');
		}

		var spinner = document.createElement('div');
		spinner.className = 'progress ' + (opts.size || '') + ' ' + (opts.classname || '');
		spinner.innerHTML = '<div></div>';

		$elem.append(spinner);
	}

	// Turn off the spinner
	else {
		$elem.find('.progress').remove();

		var content = $elem.data('spinner-content');
		if (content) {
			$elem.html(content);
		}
	}
};
 
 }; /* ==  End source for module /mods/spin.js  == */ return module; }());;