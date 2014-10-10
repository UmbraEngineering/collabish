;require._modules["/views/notfound/notfound.js"] = (function() { var __filename = "/views/notfound/notfound.js"; var __dirname = "/views/notfound"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/notfound/notfound.js  == */ var __module__ = function() { 
 
var View  = require('cloak/view');
var auth  = require('common/auth');

var NotFoundView = module.exports = View.extend({

	className: 'notfound',
	template: 'views/notfound/notfound.hbs',

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render({
			loggedIn: !! auth.user
		}));
		this.bindEvents();
	}

});
 
 }; /* ==  End source for module /views/notfound/notfound.js  == */ return module; }());;