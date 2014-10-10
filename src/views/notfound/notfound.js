
var View  = require('cloak/view');
var auth  = require('common/auth');

var NotFoundView = module.exports = View.extend({

	className: 'notfound',
	template: 'views/notfound/notfound.hbs',

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render({
			loggedIn: !! auth.user
		}));
		this.bindEvents();
	}

});
