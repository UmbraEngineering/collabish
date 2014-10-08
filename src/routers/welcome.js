
var $            = require('jquery');
var cloak        = require('cloak');
var Router       = require('cloak/router');
var WelcomeView  = require('views/welcome/welcome');
var SignupView   = require('views/welcome/signup/signup');

var WelcomeRouter = module.exports = Router.extend({

	routes: {
		'/':         'welcome',
		'/welcome':  'welcome',
		'/signup':   'signup'
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
	},

	// 
	// Signup step-two page
	// 
	signup: function(params, href, route) {
		var data = route.state.data;

		this.parent.renderView(new SignupView(data), {
			// 
		});
	}

});