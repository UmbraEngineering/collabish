
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
