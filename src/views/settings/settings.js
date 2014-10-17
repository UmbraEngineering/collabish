
var View     = require('cloak/view');
var auth     = require('common/auth');

var SettingsView = module.exports = View.extend({

	className: 'settings',
	template: 'views/settings/settings.hbs',

	events: {
		// 
	},

	initialize: function() {
		this.currentScreen = null;
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$content = this.$('main');

		this.bindEvents();
	},

	showSubscreen: function(screen, callback) {
		var self = this;
		var $content = this.$content;

		if (this.currentScreen) {
			hideCurrentScreen(showNewScreen);
		} else {
			$content.css('opacity', 0);
			showNewScreen();
		}

		function hideCurrentScreen(callback) {
			$content.animate({ opacity: 0 }, 600, function() {
				$content.html('');
				self.currentScreen = null;
				callback();
			});
		}

		function showNewScreen() {
			self.currentScreen = screen;

			screen.draw();
			screen.$elem.appendTo($content);

			$content.animate({ opacity: 1 }, 600, callback);
		}
	}

});
