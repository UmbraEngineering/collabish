
var View          = require('cloak/view');
var ModalView     = require('views/modal/modal');
var LoginModal    = require('views/welcome/nav/modals/login/login');
var TermsModal    = require('views/welcome/nav/modals/terms/terms');
var PrivacyModal  = require('views/welcome/nav/modals/privacy/privacy');

var WelcomeNavView = module.exports = View.extend({

	template: 'views/welcome/nav/nav.hbs',

	events: {
		'click .login':       'showLogin',
		'click .terms':       'showTerms',
		'click .privacy':     'showPrivacy'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.bindEvents();
	},

// --------------------------------------------------------
	
	// 
	// Shows the login modal
	// 
	showLogin: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		LoginModal.open();
	},

	// 
	// Shows the Terms of Use modal
	// 
	showTerms: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		TermsModal.open();
	},

	// 
	// Shows the Privacy Policy modal
	// 
	showPrivacy: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		PrivacyModal.open();
	}

});
