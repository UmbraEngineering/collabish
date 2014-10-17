
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

		this.$name      = this.$('input.name');
		this.$url       = this.$('input.url');
		this.$location  = this.$('input.location');

		this.bindEvents();
	},

	save: function(evt) {
		// 
	}

});
