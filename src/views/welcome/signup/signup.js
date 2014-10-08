
var View            = require('cloak/view');
var WelcomeNavView  = require('views/welcome/nav/nav');
var Request         = require('cloak/model-stores/dagger').Request;

require('mods/spin');


var SignupView = module.exports = View.extend({

	className: 'signup',
	template: 'views/welcome/signup/signup.hbs',
	successTemplate: 'views/welcome/signup/signup.success.hbs',

	events: {
		'change .auth-method select':     'changeAuthMethod',
		'click .button-wrapper button':  'signup'
	},

	initialize: function(data) {
		if (data) {
			this.data = data;
		}
	},

	draw: function() {
		this.$elem.html(this.render(this.data));
		
		this.nav = new WelcomeNavView();
		this.nav.$elem = this.$('nav');
		this.nav.draw();

		this.$error       = this.$('.error');
		this.$username    = this.$('.username');
		this.$email       = this.$('.email');
		this.$authMethod  = this.$('.auth-method');
		this.$password    = this.$('.password');
		this.$mobile      = this.$('.mobile');

		this.changeAuthMethod();

		this.bindEvents();
	},

// --------------------------------------------------------
	
	changeAuthMethod: function() {
		var method = this.$authMethod.find('select').val();

		this.$mobile.removeClass('hide');
		this.$password.removeClass('hide');

		switch (method) {
			case 'email':
				this.$mobile.addClass('hide');
				this.$password.addClass('hide');
			break;
			case 'password':
				this.$mobile.addClass('hide');
			break;
			case 'twostep-email':
				this.$mobile.addClass('hide');
			break;
			case 'twostep-sms':
				// 
			break;
		}
	},

// --------------------------------------------------------
	
	// 
	// Get user data from the form
	// 
	getData: function() {
		var data = {
			username:    this.$username.find('input').val(),
			email:       this.$email.find('input').val(),
			authMethod:  this.$authMethod.find('select').val()
		};

		if (data.authMethod !== 'email') {
			data.password = this.$password.find('input').val();
		}

		if (data.authMethod === 'twostep-sms') {
			data.phone = '+1' + this.$mobile.find('input').val();
		}

		return data;
	},
	
	// 
	// Send the signup request
	// 
	signup: function() {
		var self = this;

		// if (! this.validate()) {
			// return;
		// }
		this.showError();
		this.disable(true);

		Request.send('POST', '/users', this.getData())
			.then(
				function(res) {
					self.showSuccess(res.body);
				},
				function(res) {
					self.disable(false);
					if (res.status >= 500) {
						self.showError('An unknown error has occured on our servers; Please try again');
						return;
					}

					self.showError(res.body.message);
				}
			);
	},

	// 
	// Disable the form
	// 
	disable: function(flag) {
		this.$('input, select, button').prop('disabled', flag);

		if (flag) {
			this.$('button').spin(true, {replace: false, size: 'tiny', classname: 'invert'});
		} else {
			this.$('button').spin(false);
		}
	},

	// 
	// Show a success message when signup completes properly
	// 
	showSuccess: function(data, callback) {
		var self = this;
		var $main = this.$('main');
		$main.animate({ opacity: 0 }, 600, function() {
			$main.addClass('success');
			$main.html(self.render(data, 'successTemplate'));
			$main.animate({ opacity: 1 }, 600, callback);
		});
	},

	// 
	// Do some basic, initial validation
	// 
	validate: function() {
		var self = this;

		var data = this.getData();

		// Username validation
		if (! data.username) {
			return error('Username is required');
		}
		if (data.username.length > 30) {
			return error('Username cannot exceed 30 characters in length');
		}
		if (! /^[a-zA-Z0-9_\-]+$/.test(data.username)) {
			return error('Username can only contain letters, numbers, underscores and hyphens');
		}

		// Email validation
		if (! data.email.length) {
			return error('Email is required');
		}
		if (! /^\S+@\S+$/.test(data.email)) {
			return error('Must use a valid email address');
		}

		// Password validation
		if (data.authMethod !== 'email') {
			var confirm = this.$password.find('input').eq(1).val();
			if (! data.password) {
				return error('Password is required');
			}
			if (data.password.length < 8) {
				return error('Password must contain at least 8 characters');
			}
			if (data.password !== confirm) {
				return error('Passwords do not match');
			}
		}

		// Phone number validation
		if (data.authMethod === 'twostep-sms') {
			if (data.phone.length <= 2) {
				return error('Mobile is required');
			}
			if (! /^\+[1-9]{1}[0-9]{7,11}$/.test(data.phone)) {
				return error('Must use a valid mobile phone number');
			}
		}

		return true;

		function error(message) {
			self.showError(message);
			return false;
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
