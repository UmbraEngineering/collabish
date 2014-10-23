;require._modules["/common/disable/index.js"] = (function() { var __filename = "/common/disable/index.js"; var __dirname = "/common/disable"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/disable/index.js  == */ var __module__ = function() { 
 
var $ = require('jquery');

$.fn.disable = function(flag) {
	if (flag === void(0)) {
		flag = true;
	}

	flag =!! flag;

	this.each(function() {
		this.disabled = flag;
		if (this.tagName === 'A') {
			this.style.pointerEvents = (flag ? 'none' : 'auto');
			this.style.opacity = (flag ? 0.7 : 1);
		}
	});
};
 
 }; /* ==  End source for module /common/disable/index.js  == */ return module; }());;