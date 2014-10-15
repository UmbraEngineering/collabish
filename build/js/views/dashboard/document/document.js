;require._modules["/views/dashboard/document/document.js"] = (function() { var __filename = "/views/dashboard/document/document.js"; var __dirname = "/views/dashboard/document"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/dashboard/document/document.js  == */ var __module__ = function() { 
 
var View    = require('cloak/view');
var moment  = require('moment');

var DashboardDocumentView = module.exports = View.extend({

	className: 'document panel',
	template: 'views/dashboard/document/document.hbs',

	events: {
		// 
	},

	initialize: function(document) {
		this.document = document;
	},

	draw: function() {
		this.$elem.html(this.render({
			document: this.document.serialize()
		}));
		this.bindEvents();
	}

});
 
 }; /* ==  End source for module /views/dashboard/document/document.js  == */ return module; }());;