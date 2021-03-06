
var Model       = require('cloak/model');
var _           = require('cloak/underscore');
var Request     = require('cloak/model-stores/dagger').Request;
var md5         = require('common/md5');
var Document  /*= require('models/document')*/;

var User = module.exports = Model.extend({

	url: '/users{/#}',

	attributes: {
		username: '',
		email: '',
		phone: '',
		profile: null
	},

	// 
	// Generate a gravatar hash for this user
	// 
	// @return string
	// 
	gravatarHash: function() {
		return md5(this.get('email').toLowerCase().replace(/^\s+/, '').replace(/\s+$/, ''));
	},

	// 
	// Fetch all documents owned by this user
	// 
	// @return promise
	// 
	fetchDocuments: function(additional) {
		var req = {
			filter: {owner: this.id()}
		};

		req = _.extend(req, additional);

		return Request.send('GET', '/documents', req)
			.then(function(res) {
				return (new Document.Collection()).add(res.body);
			});
	},

	// 
	// Fetch all recently starred documents for this user
	// 
	// @return promise
	// 
	fetchRecentlyStarred: function() {
		var query = {
			limit: 5,
			fields: '-draft -current',
			sort: '-starredBy.datetime',
			filter: {
				'starredBy.user': this.id()
			}
		};
		
		return Request.send('GET', '/documents', query)
			.then(function(res) {
				return (new Document.Collection()).add(res.body);
			});
	}

});

// Late load this to avoid circular reference problems
Document = require('models/document');

// 
// Do a query for users
// 
// @param {data} the query
// @return promise
// 
User.find = function(data) {
	return Request.send('GET', '/users', data)
		.then(function(res) {
			return (new User.Collection()).add(res.body);
		});
};

// 
// Fetch a user by username
// 
// @param {username} the username to find
// @return promise
// 
User.findByUsername = function(username) {
	var filter = {
		filter: { username: username }
	};

	return Request.send('GET', '/users', filter)
		.then(function(res) {
			if (res.body.length) {
				return new User(res.body[0]);
			}

			throw new Error('User not found');
		});
};

// 
// Fetch the current user from the server
// 
// @return promise
// 
User.current = function() {
	var user = new User();
	user.id('me');

	return user.load().then(function() {
		return user;
	});
};
