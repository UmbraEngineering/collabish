
var View            = require('cloak/view');
var WelcomeNavView  = require('views/welcome/nav/nav');
var Request         = require('cloak/model-stores/dagger').Request;

var WelcomeView = module.exports = View.extend({

	className: 'welcome',
	template: 'views/welcome/welcome.hbs',

	events: {
		'blur .signup .username input':  'checkUsername',
		'blur .signup .email input':     'checkEmail',
		'click .signup .button':         'continueSignup'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());
		
		this.nav = new WelcomeNavView();
		this.nav.$elem = this.$('nav');
		this.nav.draw();

		var signup = this.signup = {
			username: {
				$label: this.$('.signup .username')
			},
			email: {
				$label: this.$('.signup .email')
			}
		};
		
		signup.username.$input = signup.username.$label.find('input');
		signup.username.$error = signup.username.$label.find('span');
		
		signup.email.$input = signup.email.$label.find('input');
		signup.email.$error = signup.email.$label.find('span');

		this.bindEvents();
	},

// --------------------------------------------------------
	
	// 
	// Validates the username field
	// 
	checkUsername: function() {
		var username = this.signup.username;
		var value = username.$input.val();

		if (! value) {
			return noError();
		}

		if (value.length > 30) {
			return showError('Cannot exceed 30 characters')
		}

		if (! /^[a-zA-Z0-9_\-]+$/.test(value)) {
			return showError('Can only contain letters, numbers, hyphens and underscores');
		}

		Request.send('GET', '/users/exists/' + value)
			.then(function(res) {
				if (res.body.exists) {
					return showError('Already taken');
				}

				noError();
			});

		function showError(err) {
			username.$label.addClass('error');
			username.$error.html(err);
		}

		function noError() {
			username.$label.removeClass('error');
			username.$error.html('');
		}
	},

	// 
	// Validates the email field
	// 
	checkEmail: function() {
		var email = this.signup.email;
		var value = email.$input.val();

		if (! value) {
			return noError();
		}

		if (! /^\S+@\S+$/.test(value)) {
			return showError('Must be a valid email address');
		}

		Request.send('GET', '/users/exists/' + value)
			.then(function(res) {
				if (res.body.exists) {
					return showError('Already in use (do you already have an account?)');
				}

				noError();
			});

		function showError(err) {
			email.$label.addClass('error');
			email.$error.html(err);
		}

		function noError() {
			email.$label.removeClass('error');
			email.$error.html('');
		}
	},

	// 
	// Given a username and email, continues on to the next step in the
	// signup process
	// 
	continueSignup: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var username = this.signup.username.$input.val();
		var email = this.signup.email.$input.val();

		router.redirectTo('/signup', {
			title: 'Collabish - Signup',
			data: {
				username: username,
				email: email
			}
		});
	}

});
