
var $            = require('jquery');
var cloak        = require('cloak');
var Router       = require('cloak/router');
var WelcomeView  = require('views/welcome/welcome');

var WelcomeRouter = module.exports = Router.extend({

	routes: {
		'/':         'welcome',
		'/welcome':  'welcome'
	},

	initialize: function() {
		// 
	},

// --------------------------------------------------------
	
	// 
	// The logged-out home page
	// 
	welcome: function() {
		this.parent.renderView(new WelcomeView(), {
			// 
		});
	}

});