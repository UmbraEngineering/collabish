
var cloak          = require('cloak');
var Router         = require('cloak/router');
var auth           = require('common/auth');
var DashboardView  = require('views/dashboard/dashboard');
var Request        = require('cloak/model-stores/dagger').Request;

var DashboardRouter = module.exports = Router.extend({

	routes: {
		'/dashboard':    'dashboard',
	},

	initialize: function() {
		// 
	},

// --------------------------------------------------------
	
	// 
	// The logged-in home page, the main dashboard
	// 
	dashboard: function() {
		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		this.parent.renderView(new DashboardView());
	}

});