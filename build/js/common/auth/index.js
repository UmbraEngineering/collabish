;require._modules["/common/auth/index.js"] = (function() { var __filename = "/common/auth/index.js"; var __dirname = "/common/auth"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/auth/index.js  == */ var __module__ = function() { 
 
var store      = require('store');
var $          = require('jquery');
var User       = require('models/user');
var AppObject  = require('cloak/app-object');
var Request    = require('cloak/model-stores/dagger').Request;

var autoPing;
var autoPingInterval = 1000 * 60 * 30;  // 30 minutes

// 
// Make the auth module an AppObject
// 
exports = module.exports = new AppObject();

// 
// Attempt to log in with the given user credentials
// 
// @param {username} the user's username or email
// @param {password} the user's password, if needed
// @return promise
// 
exports.login = function(username, password) {
	return Request.send('POST', '/auth/token', { username: username, password: password })
		.then(
			function(res) {
				switch (res.status) {
					case 200:
						setAuthToken(res.body.token);
						return exports.getUser().then(function() {
							exports.emit('login');
							return { complete: true };
						});
					case 202:
						return { complete: false };
					default:
						throw 'Something broke D:';
				}
			},
			function(res) {
				if (res.status === 401) {
					throw 'Username or password was incorrect';
				}

				throw 'An unknown error occured on our server; Please try your request again';
			}
		);
};

// 
// Complete a two-step authorization
// 
// @param {code} the confirmation code
// @return promise
// 
exports.twostepConfirm = function(code) {
	return Request.send('POST', '/auth/twostep', { code: code })
		.then(
			function(res) {
				if (res.status === 200) {
					setAuthToken(res.body.token);
					return exports.getUser().then(function() {
						exports.emit('login');
					});
				}

				throw 'Something broke D:';
			},
			function(res) {
				if (res.status === 401) {
					throw 'We could not confirm your login code';
				}

				throw 'An unknown error occured on our server; Please try your request again';
			}
		);
};

// 
// Logout the current user
// 
// @return void
// 
exports.logout = function() {
	unsetAuthToken();
	exports.user = null;
	exports.autoPing(false);
	exports.emit('logout');
	router.redirectTo('/');
};

// 
// Check for a stored auth token and confirm it
// 
// @return promise
// 
exports.check = function() {
	var token = getAuthToken();
	
	if (! token) {
		return Promise.resolve();
	}

	setAuthToken(token);
	return exports.ping()
		.then(
			exports.getUser,
			function() {
				router.redirectTo('/');
			}
		)
		.then(function() {
			exports.emit('login');
			exports.autoPing(autoPingInterval);
		});
};

// 
// Ask the server for a new auth token for the currently logged in user
// 
// @return promise
// 
exports.ping = function() {
	return Request.send('PUT', '/auth/token')
		.then(
			function(res) {
				if (res.body.token) {
					setAuthToken(res.body.token);
				}
			},
			function(res) {
				// If a ping ever fails with a 401, we should take this to mean the
				// user's token is no longer valid and they should be prompted to log
				// back in.
				if (res.status === 401) {
					unsetAuthToken();
				}

				return Promise.reject(new Error('Token validation failure'));
			}
		);
};

// 
// Start automatically pinging the server every so often to
// keep the token fresh
// 
// @param {interval} the interval (in ms) between pings
// @return void
// 
exports.autoPing = function(interval) {
	if (interval === false) {
		clearInterval(autoPing);
		autoPing = null;
		return;
	}

	if (autoPing) {
		exports.autoPing(false);
	}

	autoPing = setInterval(function() {
		exports.ping().catch(function() {
			router.redirectTo('/auth/ping-fail');
		});
	}, interval);
};

// 
// Get the currently authenticated user (by token)
// 
// @return promise
// 
exports.getUser = function() {
	return User.current().then(function(user) {
		exports.user = user;
	});
};


// --------------------------------------------------------

var TOKEN = 'authtoken';

function getAuthToken() {
	return store.get(TOKEN);
}

function setAuthToken(token) {
	unsetAuthToken();
	
	store.set(TOKEN, token);
	Request.defaultHeaders.push(['Authorization', token]);
}

function unsetAuthToken() {
	store.remove(TOKEN);

	var headers = Request.defaultHeaders;
	for (var i = 0; i < headers.length; i++) {
		if (headers[i][0].toLowerCase() === 'authorization') {
			headers.splice(i--, 1);
		}
	}
}
 
 }; /* ==  End source for module /common/auth/index.js  == */ return module; }());;