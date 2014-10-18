;require._modules["/views/profile/profile.js"] = (function() { var __filename = "/views/profile/profile.js"; var __dirname = "/views/profile"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/profile/profile.js  == */ var __module__ = function() { 
 
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

		this.$('.spinner').spin(true, { size: 'large' });

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
 
 }; /* ==  End source for module /views/profile/profile.js  == */ return module; }());;