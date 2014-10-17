;require._modules["/views/settings/settings.js"] = (function() { var __filename = "/views/settings/settings.js"; var __dirname = "/views/settings"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/settings/settings.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /views/settings/settings.js  == */ return module; }());;