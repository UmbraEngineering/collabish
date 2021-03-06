;require._modules["/lib/object-search.js"] = (function() { var __filename = "/lib/object-search.js"; var __dirname = "/lib"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/object-search.js  == */ var __module__ = function() { 
 
// 
// Get a key from an object at any depth
// 
exports.get = function(obj, key) {
	return exports.find(obj, key).get();
};

// 
// Set a key on an object at any depth
// 
exports.set = function(obj, key, value) {
	return exports.find(obj, key).set(value);
};

// 
// Delete a key from an object at any depth
// 
exports.del = function(obj, key) {
	return exports.find(obj, key).del();
};

// ------------------------------------------------------------------

// 
// The actual lookup routine. Returns an object with meta-data and simple
// get/set/del functions.
// 
exports.find = function(obj, key) {
	var keys = key.split('.');
	var lastKey = keys.pop();
	var current = obj;

	try {
		for (var i = 0, c = keys.length; i < c; i++) {
			current = current[keys[i]];
		}
		if (! current) {
			throw null;
		}
	} catch (err) {
		return {
			get: function() { },
			set: function() { },
			del: function() { },
			object: obj,
			key: key,
			keys: keys,
			lastKey: lastKey,
			scope: current,
			error: err
		};
	}

	return {
		get: function() {
			return current[lastKey];
		},
		set: function(value) {
			return current[lastKey] = value;
		},
		del: function() {
			delete current[lastKey];
		},
		object: obj,
		key: key,
		keys: keys,
		lastKey: lastKey,
		scope: current
	}
}; 
 }; /* ==  End source for module /lib/object-search.js  == */ return module; }());;