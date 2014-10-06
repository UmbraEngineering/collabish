;require._modules["/lib/cloak/model-stores/xhr.js"] = (function() { var __filename = "/lib/cloak/model-stores/xhr.js"; var __dirname = "/lib/cloak/model-stores"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/cloak/model-stores/xhr.js  == */ var __module__ = function() { 
 
// 
// Standard XHR REST communication
// 

var xhr  = require('../xhr');
var $    = require('jquery');

var methods = exports.methods = { };
var statics = exports.statics = { };

// 
// Load new data from the server
// 
// @param {data} optional querystring data
// @return promise
// 
methods._load = function(data) {
	var self = this;

	return xhr.get(self.reqUrl(), data).then(function(req) {
		return req.json;
	});
};

// 
// Saves the model to the server. Selects the request method based on whether
// or not the ID property is defined
// 
// @param {data} the data to send
// @return promise
// 
methods._save = function(data) {
	var self = this;
	var method = this.id() ? 'put' : 'post';

	return xhr[method](this.reqUrl(), data).then(function(req) {
		return req.json;
	});
};

//
// Selectively saves specific properties back to the server using
// a PATCH request
// 
// @param {data} the data to send
// @return promise
//
methods._patch = function(data) {
	var self = this;
	
	return xhr.patch(this.reqUrl(), data).then(function(req) {
		return req.json;
	});
};

// 
// Delete the model from the server using a DELETE request
// 
// @return promise
// 
methods._del = function() {
	return xhr.del(this.reqUrl());
};
 
 }; /* ==  End source for module /lib/cloak/model-stores/xhr.js  == */ return module; }());;