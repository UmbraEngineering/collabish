;require._modules["/routers/welcome.js"] = (function() { var __filename = "/routers/welcome.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/welcome.js  == */ var __module__ = function() { 
 
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
		document.title = 'Collabish';

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
		document.title = 'Signup / Collabish';

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
		document.title = 'Email Confirmation / Collabish';

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
		document.title = 'Two Step Auth / Collabish';

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
 }; /* ==  End source for module /routers/welcome.js  == */ return module; }());;