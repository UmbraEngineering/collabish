
var View     = require('cloak/view');
var auth     = require('common/auth');

var SettingsView = module.exports = View.extend({

	className: 'profile-settings',
	template: 'views/settings/profile/profile.hbs',

	events: {
		'blur input.name':        'saveField name',
		'blur input.url':         'saveField url',
		'blur input.location':    'saveField location'
	},

	initialize: function() {
		this.profile = auth.user.get('profile') || { };
	},

	draw: function() {
		this.$elem.html(this.render({
			name: this.profile.name,
			url: this.profile.url,
			location: this.profile.location,
			gravatarHash: auth.user.gravatarHash()
		}));

		this.$name      = this.$('input.name');
		this.$url       = this.$('input.url');
		this.$location  = this.$('input.location');

		this.bindEvents();
	},

	saveField: function(evt, field) {
		var $input = this['$' + field];
		var value = $input.val();
		var $icon = $input.siblings('i');

		// If the value is unchanged, just stop
		if (this.profile[field] === value) {
			return;
		}

		// Show the spinner ...
		$icon.icon('spinner', {spin: true, color: '#444'});

		// Update the profile
		this.profile[field] = value;
		auth.user.set('profile', this.profile);

		// Save it to the server
		auth.user.patch('profile')
			.then(
				function() {
					// Show the success icon
					$icon.icon('check', {color: '#4d4'}).delay(2000).icon(false);
				},
				function() {
					// Show the error icon
					$icon.icon('warning', {color: '#d44'});
				}
			);
	}

});
