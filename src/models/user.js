
var Model    = require('cloak/model');
var Request  = require('cloak/model-stores/dagger').Request;

var User = module.exports = Model.extend({

	url: '/users{/#}',

	attributes: {
		username: '',
		email: '',
		phone: ''
	},

	activate: function() {
		this.set('isActivated', true);
		return this.patch('isActivated');
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
