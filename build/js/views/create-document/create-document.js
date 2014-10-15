;require._modules["/views/create-document/create-document.js"] = (function() { var __filename = "/views/create-document/create-document.js"; var __dirname = "/views/create-document"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/create-document/create-document.js  == */ var __module__ = function() { 
 
var View  = require('cloak/view');

var CreateDocumentView = module.exports = View.extend({

	className: 'create-document',
	template: 'views/create-document/create-document.hbs',

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.bindEvents();
	}

});
 
 }; /* ==  End source for module /views/create-document/create-document.js  == */ return module; }());;