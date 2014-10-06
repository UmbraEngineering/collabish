;require._modules["/routers/main.js"] = (function() { var __filename = "/routers/main.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/main.js  == */ var __module__ = function() { 
 
var $       = require('jquery');
var cloak   = require('cloak');
var Router  = require('cloak/router');

var MainRouter = module.exports = Router.extend({

	routes: {
		// 
	},

	initialize: function() {
		this.$content = $('#wrapper');

		// Store the currently active view object here
		this.currentView = null;

		// Handle 404 errors
		this.bind('notfound');
		this.on('notfound', this.notfound);

		// Handle internal anchors with the router
		$('#wrapper').on('click', 'a[href^="#"], a[href^="/#"]', this.handleAnchor);
	},

	notfound: function() {
		console.log('not found');
	},

	renderView: function(view, opts) {
		view.$elem.appendTo(this.$content);
		view.draw();
	}

}); 
 }; /* ==  End source for module /routers/main.js  == */ return module; }());;