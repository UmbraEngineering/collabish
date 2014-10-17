
var cloak               = require('cloak');
var Router              = require('cloak/router');
var auth                = require('common/auth');
var SettingsView        = require('views/settings/settings');
var ProfileView         = require('views/settings/profile/profile');
var AuthenticationView  = require('views/settings/authentication/authentication');
var NotificationView    = require('views/settings/notification/notification');
var AccountView         = require('views/settings/account/account');
var Request             = require('cloak/model-stores/dagger').Request;

var SettingsRouter = module.exports = Router.extend({

	routes: {
		'/settings':                   'settings',
		'/settings/profile':           'profile',
		'/settings/authentication':    'authentication',
		'/settings/notification':      'notification',
		'/settings/account':           'account'
	},

	initialize: function() {
		// 
	},

// --------------------------------------------------------

	// 
	// Root settings URI, just redirects
	// 
	settings: function() {
		if (auth.user) {
			this.redirectTo('/settings/profile');
		} else {
			this.redirectTo('/');
		}
	},

// --------------------------------------------------------
	
	// 
	// Public profile page
	// 
	profile: function() {
		document.title = 'Account Settings / Collabish';
		
		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		this._ensureSettingsPage()
			.then(function(settingsView) {
				settingsView.showSubscreen(new ProfileView());
			});
	},

// --------------------------------------------------------
	
	// 
	// Authentication settings page
	// 
	authentication: function() {
		document.title = 'Account Settings / Collabish';
		
		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		this._ensureSettingsPage()
			.then(function(settingsView) {
				settingsView.showSubscreen(new AuthenticationView());
			});
	},

// --------------------------------------------------------
	
	// 
	// Notification settings page
	// 
	notification: function() {
		document.title = 'Account Settings / Collabish';
		
		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		this._ensureSettingsPage()
			.then(function(settingsView) {
				settingsView.showSubscreen(new NotificationView());
			});
	},

// --------------------------------------------------------
	
	// 
	// Account settings page
	// 
	account: function() {
		document.title = 'Account Settings / Collabish';
		
		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		this._ensureSettingsPage()
			.then(function(settingsView) {
				settingsView.showSubscreen(new AccountView());
			});
	},

// --------------------------------------------------------

	_ensureSettingsPage: function() {
		var router = this.parent;

		if (router.currentView instanceof SettingsView) {
			return Promise.resolve(router.currentView);
		}

		return router.renderView(new SettingsView())
			.then(function() {
				return router.currentView;
			});
	}

});