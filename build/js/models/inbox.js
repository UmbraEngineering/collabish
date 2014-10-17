;require._modules["/models/inbox.js"] = (function() { var __filename = "/models/inbox.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/inbox.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /models/inbox.js  == */ return module; }());;