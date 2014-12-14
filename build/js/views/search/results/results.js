;require._modules["/views/search/results/results.js"] = (function() { var __filename = "/views/search/results/results.js"; var __dirname = "/views/search/results"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/search/results/results.js  == */ var __module__ = function() { 
 
var _                     = require('cloak/underscore');
var View                  = require('cloak/view');
var auth                  = require('common/auth');
var DocumentOverviewView  = require('views/document/overview/overview');

var SearchResultsView = module.exports = View.extend({

	className: 'search-results',
	template: 'views/search/results/results.hbs',
	searchingTemplate: 'views/search/results/searching.hbs',

	events: {
		// 
	},

	initialize: function() {
		this.documents = null;
	},

	draw: function() {
		this.$elem.html(this.render(null, 'searchingTemplate'));
	},

	drawResults: function() {
		var self = this;
		this.$elem.animate({ 'opacity': 'hide' }, 600, function() {
			self.$elem.html(self.render({
				documents: self.documents.serialize()
			}));

			self.docs = [ ];
			self.bindPartials({
				document: DocumentOverviewView
			});

			self.$elem.animate({ 'opacity': 'show' }, 600, function() {
				// 
			});
		});
	}

});
 
 }; /* ==  End source for module /views/search/results/results.js  == */ return module; }());;