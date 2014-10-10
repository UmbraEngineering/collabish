;require._modules["/routers/dashboard.js"] = (function() { var __filename = "/routers/dashboard.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/dashboard.js  == */ var __module__ = function() { 
 
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
		if ( auth.user) {
			this.redirectTo('/');
			return;
		}

		this.parent.renderView(new DashboardView());
	}

}); 
 }; /* ==  End source for module /routers/dashboard.js  == */ return module; }());;