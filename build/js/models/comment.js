;require._modules["/models/comment.js"] = (function() { var __filename = "/models/comment.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/comment.js  == */ var __module__ = function() { 
 
var Model     = require('cloak/model');
var User      = require('models/user');
var Document  = require('models/document');

var Comment = module.exports = Model.extend({

	url: '/documents/{document}/comments{/#}',

	attributes: {
		document: Document,
		author: User,
		content: null,
		created: null,
		updated: null
	}

});
 
 }; /* ==  End source for module /models/comment.js  == */ return module; }());;