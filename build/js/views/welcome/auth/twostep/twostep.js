;require._modules["/views/welcome/auth/twostep/twostep.js"] = (function() { var __filename = "/views/welcome/auth/twostep/twostep.js"; var __dirname = "/views/welcome/auth/twostep"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/welcome/auth/twostep/twostep.js  == */ var __module__ = function() { 
 
var View          = require('cloak/view');
var auth          = require('common/auth');
var ModalView     = require('views/modal/modal');

var TwoStepAuthView = module.exports = View.extend({

	className: 'twostep',
	template: 'views/welcome/auth/twostep/twostep.hbs',

	events: {
		'click button':    'confirm'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$error   = this.$('.error');
		this.$button  = this.$('button');
		this.$input   = this.$('input.code');

		this.bindEvents();
	},

	// 
	// Submit the confirmation code
	// 
	// @return void
	// 
	confirm: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var self = this;
		var code = this.$input.val();

		this.showError();
		if (! code) {
			this.showError('You must enter your confirmation code');
			return;
		}

		auth.twostepConfirm(code)
			.then(function() {
				router.redirectTo('/dashboard');
			})
			.catch(function(err) {
				self.disable(false);
				self.showError(err);
			});
	},

	// 
	// Disable the form
	// 
	// @param {flag} disable or enable
	// @return void
	// 
	disable: function(flag) {
		this.$('input, button').prop('disabled', flag);

		if (flag) {
			this.$button.spin(true, {replace: false, size: 'tiny', classname: 'transparent'});
		} else {
			this.$button.spin(false);
		}
	},

	// 
	// Shows an error message
	// 
	// @param {message} the message to display
	// 
	showError: function(message) {
		if (! message) {
			this.$error.html('');
			this.$error.addClass('hide');
			return;
		}

		this.$error.html(message);
		this.$error.removeClass('hide');
	}

});
 
 }; /* ==  End source for module /views/welcome/auth/twostep/twostep.js  == */ return module; }());;