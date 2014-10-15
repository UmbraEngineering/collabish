
var $             = require('jquery');
var cloak         = require('cloak');
var auth          = require('common/auth');
var Router        = require('cloak/router');
var HeaderView    = require('views/header/header');
var FooterView    = require('views/footer/footer');
var NotFoundView  = require('views/notfound/notfound');

var MainRouter = module.exports = Router.extend({

	routes: {
		// 
	},

	initialize: function() {
		this.$header = $('#wrapper > header');
		this.$content = $('#wrapper > main');
		this.$footer = $('#wrapper > footer');

		// Store the header/footer views
		this.header = null;
		this.footer = null;

		// Store the currently active view object here
		this.currentView = null;

		// Handle 404 errors
		this.bind('notfound');
		this.on('notfound', this.notfound);

		// When a user logs in, draw the header to the screen
		this.bind('drawHeader', 'removeHeader');
		auth.on('login', this.drawHeader);
		auth.on('logout', this.removeHeader);
		if (auth.user) {
			this.drawHeader();
		}

		// Draw the footer
		this.drawFooter();

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

	drawHeader: function() {
		if (this.header) {
			return;
		}

		this.header = new HeaderView();

		// Render directly to the header element
		this.header.$elem = this.$header;
		this.header.draw();
	},

	drawFooter: function() {
		if (this.footer) {
			return;
		}

		this.footer = new FooterView();
		this.footer.$elem = this.$footer;
		this.footer.draw();
	},

	removeHeader: function() {
		if (this.header) {
			this.header.remove();
			this.header = null;
		}
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