
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