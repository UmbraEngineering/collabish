
var cloak                  = require('cloak');
var Router                 = require('cloak/router');
var Request                = require('cloak/model-stores/dagger').Request;

var purl                   = require('purl');
var auth                   = require('common/auth');

var WelcomeView            = require('views/welcome/welcome');
var SignupView             = require('views/welcome/signup/signup');
var TwoStepAuthView        = require('views/welcome/auth/twostep/twostep');
var EmailConfirmationView  = require('views/welcome/auth/email-confirmation/email-confirmation');

var WelcomeRouter = module.exports = Router.extend({

	routes: {
		'/':                      'welcome',
		'/welcome':               'welcome',
		'/signup':                'signup',
		'/auth/email-confirm':    'emailConfirm',
		'/auth/twostep':          'twostepAuth',
		'/auth/ping-fail':        'pingFail'
	},

	initialize: function() {
		// 
	},

// --------------------------------------------------------
	
	// 
	// The logged-out home page
	// 
	welcome: function() {
		if (auth.user) {
			this.redirectTo('/dashboard');
			return;
		}
		this.parent.renderView(new WelcomeView());
	},

	// 
	// Signup step-two page
	// 
	signup: function(params, href, route) {
		if (auth.user) {
			this.redirectTo('/dashboard');
			return;
		}

		this.parent.renderView(new SignupView(route.state.data));
	},

	// 
	// Email confirmation
	// 
	emailConfirm: function(params) {
		var view = new EmailConfirmationView();
		var token = purl(location).param('token');

		this.parent.renderView(view);

		// Send the email confirmation request
		Request.send('PUT', '/auth/email-confirmation/' + token)
			.then(
				function(res) {
					view.showSuccess();
				},
				function(res) {
					view.showError();
				}
			);
	},

	// 
	// A page for users to enter their two step auth code
	// 
	twostepAuth: function() {
		if (auth.user) {
			this.redirectTo('/dashboard');
			return;
		}

		this.parent.renderView(new TwoStepAuthView());
	},

	// 
	// User session ended
	// 
	pingFail: function() {
		var self = this;

		setTimeout(function() {
			try {
				this.parent.currentView.nav.showLogin();
				this.parent.currentView.nav.modal.showError('Your authentication token expired');
			} catch (err) {
				// 
			}
		}, 3000);

		this.parent.redirectTo('/');
	}

});