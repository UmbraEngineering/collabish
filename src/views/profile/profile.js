
var _                     = require('cloak/underscore');
var View                  = require('cloak/view');
var auth                  = require('common/auth');
var DocumentOverviewView  = require('views/document-overview/document-overview');

var ProfileView = module.exports = View.extend({

	className: 'profile',
	template: 'views/profile/profile.hbs',
	userTemplate: 'views/profile/user.hbs',
	notfoundTemplate: 'views/profile/notfound.hbs',

	events: {
		// 
	},

	initialize: function(username) {
		this.user       = null;
		this.username   = username;
		this.documents  = null;
	},

	draw: function() {
		this.$elem.html(this.render({
			username: this.username
		}));

		this.$main = this.$('main');

		this.$main.spin(true, { size: 'large' });

		this.bindEvents();
	},

	drawUser: function() {
		var user = this.user.serialize();
		user.profile = _.defaults(user.profile || { }, {
			name: '',
			url: '',
			location: ''
		});

		var data = {
			user: user,
			gravatarHash: this.user.gravatarHash()
		};

		this.$main.html(this.render(data, 'userTemplate'));
		
		var $documents = this.$documents = this.$('.documents');
		var documents = this.documents;

		if (documents.len()) {
			documents.forEach(function(doc) {
				var view = new DocumentOverviewView(doc);
				view.$elem.appendTo($documents);
				view.draw();
			});
		} else {
			$documents.html('<h2>This user has no visible documents</h2>');
		}
	},

	showNotfound: function() {
		this.$main.html(this.render({ }, 'notfoundTemplate'));
	}

});
