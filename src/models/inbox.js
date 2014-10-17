
var auth          = require('common/auth');
var Model         = require('cloak/model');
var Request       = require('cloak/model-stores/dagger').Request;
var User          = require('models/user');
var Notification  = require('models/notification');

var Inbox = module.exports = Model.extend({

	url: '/inbox',

	attributes: {
		user: User,
		notifications: Notification.Collection
	},

	initialize: function(user) {
		if (user instanceof User) {
			this.set('user', user);
		}
	},

	fetchNotifications: function() {
		// Request.send('GET', '/inbox/notifications')
	}

});
