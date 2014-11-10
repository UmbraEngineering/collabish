;require._modules["/views/document/read/read.js"] = (function() { var __filename = "/views/document/read/read.js"; var __dirname = "/views/document/read"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/document/read/read.js  == */ var __module__ = function() { 
 
var View    = require('cloak/view');
var moment  = require('moment');

var ReadView = module.exports = View.extend({

	className: 'read',
	template: 'views/document/read/read.hbs',

	events: {
		// 
	},

	initialize: function() {
		this.commit = null;
		this.document = null;
	},

	draw: function() {
		this.$elem.html('<div class="spinner"></div>');
		this.$('.spinner').spin(true, {size: 'large'});
		this.bindEvents();
	},

	drawDocument: function() {
		this.$elem.html(this.render({
			document: this.document.serialize({ deep: true }),
			contents: this.document.render()
		}));
	}

});
 
 }; /* ==  End source for module /views/document/read/read.js  == */ return module; }());;