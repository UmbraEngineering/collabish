;require._modules["/views/welcome/welcome.js"] = (function() { var __filename = "/views/welcome/welcome.js"; var __dirname = "/views/welcome"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/welcome/welcome.js  == */ var __module__ = function() { 
 
var View  = require('cloak/view');

var WelcomeView = module.exports = View.extend({

	className: 'welcome',
	template: 'views/welcome/welcome.hbs',

	events: {
		'click .login':            'showLogin',
		'click .terms':            'showTerms',
		'click .privacy':          'showPrivacy',
		'click .signup .button':   'continueSignup'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		// Get the content element
		this.$main = this.$('main');

		this.bindEvents();
	},

	showLogin: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		alert('Login :D');
	},

	showTerms: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		alert('Terms :D');
	},

	showPrivacy: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		alert('Privacy :D');
	},

	continueSignup: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		alert('Signup :D');
	}

});
 
 }; /* ==  End source for module /views/welcome/welcome.js  == */ return module; }());;