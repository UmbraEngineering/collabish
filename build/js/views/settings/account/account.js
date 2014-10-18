;require._modules["/views/settings/account/account.js"] = (function() { var __filename = "/views/settings/account/account.js"; var __dirname = "/views/settings/account"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/settings/account/account.js  == */ var __module__ = function() { 
 
var View     = require('cloak/view');
var auth     = require('common/auth');

var AccountView = module.exports = View.extend({

	className: 'account',
	template: 'views/settings/account/account.hbs',

	events: {
		'click .update-username.button':    'updateUsername'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render({
			username: auth.user.get('username'),
			email: auth.user.get('email')
		}));

		this.$username  = this.$('input.username');
		this.$url       = this.$('input.url');
		this.$location  = this.$('input.location');

		this.bindEvents();
	},

	updateUsername: function(evt) {
		// 
	}

});
 
 }; /* ==  End source for module /views/settings/account/account.js  == */ return module; }());;