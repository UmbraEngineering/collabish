;require._modules["/routers/main.js"] = (function() { var __filename = "/routers/main.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/main.js  == */ var __module__ = function() { 
 
var $             = require('jquery');
var cloak         = require('cloak');
var Router        = require('cloak/router');
var NotFoundView  = require('views/notfound/notfound');

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

		// Send a new google analytics pageview event when we change pages
		this.on('statechange', function() {
			ga('send', 'pageview');
		});
	},

	notfound: function() {
		this.renderView(new NotFoundView());
	},

	renderView: function(view, opts) {
		var self = this;
		var animate =! (opts && opts.animate === false);
		var duration = (opts && opts.duration) || 600;
		var onDone = (opts && opts.callback) || function() { };
	
		hideCurrent(function() {
			self.currentView = view;

			view.draw();
			view.$elem.appendTo(self.$content);

			if (! animate) {
				return onDone();
			}

			self.$content.animate({ opacity: 1 }, duration, function() {
				onDone();
			});
		});

		function hideCurrent(callback) {
			if (! self.currentView) {
				return callback();
			}

			if (! animate) {
				self.currentView.remove();
				self.currentView = null;
				return callback();
			}

			self.$content.animate({ opacity: 0 }, duration, function() {
				self.currentView.remove();
				self.currentView = null;
				callback();
			});
		}
	}

}); 
 }; /* ==  End source for module /routers/main.js  == */ return module; }());;