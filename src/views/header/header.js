
var View  = require('cloak/view');
var auth  = require('common/auth');

var HeaderView = module.exports = View.extend({

	tagName: 'div',
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

		this.$inbox = this.$('.inbox');

		this.bindEvents();
	},

	signout: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		auth.logout();
	},

	setInboxCount: function(count) {
		var $notifier = this.$inbox.find('.notification');
		$notifier.removeClass('small medium large');

		if (count < 1) {
			// pass
		} else if (count < 10) {
			$notifier.addClass('small');
		} else if (count < 20) {
			$notifier.addClass('medium');
		} else {
			$notifier.addClass('large');
		}

		$tooltip = this.$inbox.find('[data-tooltip]');
		$tooltip.attr('data-tooltip', 'Inbox' + (count ? ' (' + count + ')' : ''));
	}

});
