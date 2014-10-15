
var View        = require('cloak/view');
var LoginModal  = require('views/modals/login/login');
var Request     = require('cloak/model-stores/dagger').Request;

require('common/spin.js');

var EmailConfirmationView = module.exports = View.extend({

	className: 'welcome-auth email-confirm',
	template: 'views/welcome/auth/email-confirmation/email-confirmation.hbs',
	errorTemplate: 'views/welcome/auth/email-confirmation/email-confirmation.error.hbs',
	successTemplate: 'views/welcome/auth/email-confirmation/email-confirmation.success.hbs',

	events: {
		'click a.login':    'showLogin'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());
		
		this.nav = new WelcomeNavView();
		this.nav.$elem = this.$('nav');
		this.nav.draw();
		
		this.$main = this.$('main', {size: 'large'});
		this.$main.spin(true);

		this.bindEvents();
	},

	showSuccess: function() {
		this.animateToTemplate('successTemplate');
	},

	showError: function() {
		this.animateToTemplate('errorTemplate');
	},

	animateToTemplate: function(template) {
		var self = this;

		this.$main.animate({ opacity: 0 }, 600, function() {
			self.$main.html(self.render({ }, template));
			self.$main.animate({ opacity: 1 }, 600, function() {
				self.bindEvents();
			});
		});
	},

	showLogin: function(evt) {
		if (evt) {
			evt.preventDefault();
		}
		
		LoginModal.open();
	}

});


