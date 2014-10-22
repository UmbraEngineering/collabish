;require._modules["/views/document-overview/document-overview.js"] = (function() { var __filename = "/views/document-overview/document-overview.js"; var __dirname = "/views/document-overview"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/document-overview/document-overview.js  == */ var __module__ = function() { 
 
var View       = require('cloak/view');
var moment     = require('moment');
var StarsView  = require('views/document/stars/stars');

var DocumentOverviewView = module.exports = View.extend({

	className: 'document-overview panel',
	template: 'views/document-overview/document-overview.hbs',

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
		
		this.bindPartials({
			stars: StarsView
		});

		this.stars.on('star', function() {
			// 
		});

		this.stars.on('unstar', function() {
			// 
		});
	}

});
 
 }; /* ==  End source for module /views/document-overview/document-overview.js  == */ return module; }());;