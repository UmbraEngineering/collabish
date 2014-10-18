;require._modules["/views/settings/authentication/authentication.js"] = (function() { var __filename = "/views/settings/authentication/authentication.js"; var __dirname = "/views/settings/authentication"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/settings/authentication/authentication.js  == */ var __module__ = function() { 
 
var View     = require('cloak/view');
var auth     = require('common/auth');

var AuthenticationView = module.exports = View.extend({

	className: 'authentication',
	template: 'views/settings/authentication/authentication.hbs',

	events: {
		'click .action.button':    'save'
	},

	initialize: function() {
		this.authMethod = auth.user.get('authMethod');
	},

	draw: function() {
		this.$elem.html(this.render({
			user: auth.user.serialize(),
			authMethod: {
				isPassword:      (this.authMethod === 'password'),
				isEmail:         (this.authMethod === 'email'),
				isTwostepEmail:  (this.authMethod === 'twostep-email'),
				isTwostepSms:    (this.authMethod === 'twostep-sms')
			}
		}));

		this.$currentPassword  = this.$('.current-password');
		this.$newPassword      = this.$('.new-password');

		this.bindEvents();
	},

	save: function(evt) {
		// 
	}

});
 
 }; /* ==  End source for module /views/settings/authentication/authentication.js  == */ return module; }());;