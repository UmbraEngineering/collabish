
var View     = require('cloak/view');
var auth     = require('common/auth');

var AccountView = module.exports = View.extend({

	className: 'account',
	template: 'views/settings/account/account.hbs',

	events: {
		'click .update-username.button':    'updateUsername'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render({
			username: auth.user.get('username'),
			email: auth.user.get('email')
		}));

		this.$username  = this.$('input.username');
		this.$url       = this.$('input.url');
		this.$location  = this.$('input.location');

		this.bindEvents();
	},

	updateUsername: function(evt) {
		// 
	}

});
