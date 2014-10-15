;require._modules["/models/revision.js"] = (function() { var __filename = "/models/revision.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/revision.js  == */ var __module__ = function() { 
 
var Model     = require('cloak/model');
var Request   = require('cloak/model-stores/dagger').Request;
var Document  = require('models/document');

var Revision = module.exports = Model.extend({

	url: '/revisions{/#}',

	attributes: {
		name: '',
		content: '',
		public: false,
		created: null,
		updated: null,
		document: Document
	}

});

// 
// Do a query for revisions
// 
// @param {data} the query
// @return promise
// 
Revision.find = function(data) {
	return Request.send('GET', '/revisions', data)
		.then(function(res) {
			return (new Revision.Collection()).add(res.body);
		});
};
 
 }; /* ==  End source for module /models/revision.js  == */ return module; }());;