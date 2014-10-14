;require._modules["/views/dashboard/dashboard.js"] = (function() { var __filename = "/views/dashboard/dashboard.js"; var __dirname = "/views/dashboard"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/dashboard/dashboard.js  == */ var __module__ = function() { 
 
var View  = require('cloak/view');

var DashboardView = module.exports = View.extend({

	className: 'dashboard',
	template: 'views/dashboard/dashboard.hbs',

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());
		this.bindEvents();
	}

});
 
 }; /* ==  End source for module /views/dashboard/dashboard.js  == */ return module; }());;