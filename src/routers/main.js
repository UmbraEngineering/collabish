
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

		// Send a new google analytics pageview event when we change pages
		this.on('statechange', function() {
			ga('send', 'pageview');
		});
	},

	notfound: function() {
		console.log('not found');
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