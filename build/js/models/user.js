;require._modules["/models/user.js"] = (function() { var __filename = "/models/user.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/user.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /models/user.js  == */ return module; }());;