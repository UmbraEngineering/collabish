
var Model     = require('cloak/model');
var Request   = require('cloak/model-stores/dagger').Request;
var md5       = require('common/md5');
var Document  = require('models/document');

var User = module.exports = Model.extend({

	url: '/users{/#}',

	attributes: {
		username: '',
		email: '',
		phone: ''
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
	fetchDocuments: function() {
		var filter = {owner: this.id()};

		return Request.send('GET', '/documents', {filter: filter})
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
		return Promise.resolve(new Document.Collection());
		// return Request.send('GET', '/users/me/activity/recent')
		// 	.then(function(res) {
		// 		return (new Document.Collection()).add(res.body);
		// 	});
	}

});

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
