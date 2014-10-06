;require._modules["/routers/welcome.js"] = (function() { var __filename = "/routers/welcome.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/welcome.js  == */ var __module__ = function() { 
 
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
 }; /* ==  End source for module /routers/welcome.js  == */ return module; }());;