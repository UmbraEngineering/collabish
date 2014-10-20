;require._modules["/views/document/document.js"] = (function() { var __filename = "/views/document/document.js"; var __dirname = "/views/document"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/document/document.js  == */ var __module__ = function() { 
 
var View    = require('cloak/view');
var moment  = require('moment');

var DocumentView = module.exports = View.extend({

	className: 'document',
	template: 'views/document/document.hbs',

	events: {
		// 
	},

	initialize: function(document) {
		this.document = document;
	},

	draw: function() {
		this.$elem.html('<div class="spinner"></div>');
		this.$('.spinner').spin(true, {size: 'large'});
		this.bindEvents();
	},

	drawDocument: function() {
		this.$elem.html(this.render({
			document: this.document.serialize({ deep: true })
		}));
	}

});
 
 }; /* ==  End source for module /views/document/document.js  == */ return module; }());;