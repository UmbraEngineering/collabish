;require._modules["/lib/cloak/xhr.js"] = (function() { var __filename = "/lib/cloak/xhr.js"; var __dirname = "/lib/cloak"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/cloak/xhr.js  == */ var __module__ = function() { 
 
// 
// XHR requests/queueing code
// 

var $          = require('jquery');
var _          = require('underscore');
var cloak      = require('cloak');
var base64     = require('cloak/base64');
var Promise    = require('promise').Promise;
var AppObject  = require('cloak/app-object');

// 
// Request queue class. One of these queues up XHR/Socket requests to be run
// one at a time.
// 
var Queue = exports.Queue = AppObject.extend({

	init: function() {
		this._super();
		this.queue = [ ];
		this.running = 0;
	},

	next: function() {
		_.nextTick(this, function() {
			if (this.running < Queue.maxRequests && this.queue.length) {
				this.running++;

				var req = this.queue.shift();
				req.on('done', function() {
					this.running--;
					this.next();
				});
				this.emit('request', req);
				req.start();
			}
		});
	},

	run: function(method, url, data) {
		var req = new Request(method, url, data);

		this.queue.push(req);
		this.emit('queued', req);
		this.next();

		return req;
	},

	get: function(url, data) {
		return this.run('get', url, data);
	},

	post: function(url, data) {
		return this.run('post', url, data);
	},

	put: function(url, data) {
		return this.run('put', url, data);
	},

	patch: function(url, data) {
		return this.run('patch', url, data);
	},

	del: function(url, data) {
		return this.run('delete', url, data);
	}

});

// 
// Max number of concurrent requests allowed
// 
Queue.maxRequests = 2;

// --------------------------------------------------------

// 
// Export a single queue
// 
exports.queue = new Queue();

// 
// Expose the queue's main methods
// 
_.each(['run', 'get', 'post', 'put', 'patch', 'del'], function(method) {
	exports[method] = _.bind(exports.queue[method], exports.queue);
});

// --------------------------------------------------------

// 
// Request class
// 
var Request = exports.Request = AppObject.extend({

	init: function(method, url, data) {
		this.method  = method;
		this.url     = cloak.config.apiUrl + url;
		this.data    = data;

		// The config object to pass to $.ajax
		this.config = {
			url: url,
			type: method.toUpperCase(),
			async: true,
			cache: false,
			dataType: 'json',
			contentType: 'application/json',
			headers: { },
			traditional: true
		};

		// Add any default headers
		_.forEach(Request.defaultHeaders, _.bind(function(header) {
			this.setHeader(header[0], header[1]);
		}, this));

		// Check if we need to set an X-Http-Method-Override header
		if (_(cloak.config.httpMethodOverride).indexOf(method) >= 0) {
			this.config.type = 'POST';
			this.config.headers['X-Http-Method-Override'] = method;
		}

		// Add the request body
		if (method === 'GET') {
			this.config.data = data;
		} else {
			this.config.data = JSON.stringify(data);
			this.config.processData = false;
		}
	},

	// 
	// Set a new request header
	// 
	setHeader: function(header, value) {
		this.config.headers[header] = value;
	},

	// 
	// Starts running the request
	// 
	run: function() {
		var self = this;

		return new Promise(function(resolve, reject) {
			self.config.complete = _.bind(self.oncomplete, self, resolve, reject);

			cloak.log('XHR: ' + self.method.toUpperCase() + ' ' + self.url + ' ' + self.config.data);
			self.emit('send', self);
			self.xhr = $.ajax(self.config);
		});
	},

	// 
	// This is called when the XHR is complete, and handles parsing the response
	// and emiting events.
	// 
	oncomplete: function(resolve, reject, xhr, status) {
		try {
			this.json = JSON.parse(xhr.responseText);
		} catch (e) {
			this.json = { };
		}

		this.emit('response', this);
		this.emit('response.' + status, this);

		if (status === 'success' || status === 'error') {
			this.emit(status + '.' + xhr.status, this);
		}

		if (status >= 400 || ! status) {
			reject(this);
		} else {
			resolve(this);
		}
	},

	// 
	// Abort the running request if we can
	// 
	abort: function() {
		if (this.xhr && this.xhr.abort) {
			this.xhr.abort();
			this.emit('abort', this);
		}
	}

});

// 
// Default headers set on every request
// 
Request.defaultHeaders = [ ];
 
 }; /* ==  End source for module /lib/cloak/xhr.js  == */ return module; }());;