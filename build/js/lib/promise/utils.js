;require._modules["/lib/promise/utils.js"] = (function() { var __filename = "/lib/promise/utils.js"; var __dirname = "/lib/promise"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/promise/utils.js  == */ var __module__ = function() { 
 
var _global = (function() { return this; }).call();

// 
// If the given value is a valid thenable, return the then method; otherwise, return false
// 
exports.thenable = function(value) {
	if (value && (typeof value === 'object' || typeof value === 'function')) {
		try {
			var then = value.then;
		} catch (err) {
			throw err;
		}

		if (typeof then === 'function') {
			return then;
		}
	}

	return false;
}

// 
// Shim Object.defineProperty if needed; This will never run in Node.js land, but
// is here for when we browserify
// 
exports.defineProperty = function(obj, prop, opts) {
	if (Object.defineProperty) {
		try {
			return Object.defineProperty(obj, prop, opts);
		} catch (err) { }
	}
	
	if (opts.value) {
		obj[prop] = opts.value;
	}
};

// 
// setImmediate shim
// 
if (! _global.setImmediate) {
	_global.setImmediate = function(func) {
		setTimeout(func, 0);
	};
}

exports.log = function(obj) {
	console.log(
		require('util').inspect(obj, {
			colors: true,
			showHidden: true,
			depth: 2
		})
	)
}; 
 }; /* ==  End source for module /lib/promise/utils.js  == */ return module; }());;