
var View  = require('cloak/view');
var auth  = require('common/auth');

var HeaderView = module.exports = View.extend({

	template: 'views/header/header.hbs',

	events: {
		'click .signout':      'signout'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render({
			user: auth.user.serialize({ deep: false }),
			gravatarHash: auth.user.gravatarHash()
		}));
		this.bindEvents();
	},

	signout: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		auth.logout();
	}

});
