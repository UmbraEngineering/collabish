;require._modules["/views/welcome/nav/modals/login/login.js"] = (function() { var __filename = "/views/welcome/nav/modals/login/login.js"; var __dirname = "/views/welcome/nav/modals/login"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/welcome/nav/modals/login/login.js  == */ var __module__ = function() { 
 
var ModalView  = require('views/modal/modal');
var Request    = require('cloak/model-stores/dagger').Request;

// 
// Opens a new login modal
// 
exports.open = ModalView.template({

	classname: 'login',
	template: 'views/welcome/nav/modals/login/login.hbs',
	
	events: {
		'click .login .button':    'login'
	},
	
	props: {
		login: function(evt) {
			if (evt) {
				evt.preventDefault();
			}

			var self = this;
			var username = this.$('.username').val();
			var password = this.$('.password').val();

			this.showError();

			if (! username) {
				this.showError('Username or email is required');
				return;
			}

			Request.send('POST', '/auth', { username: username, password: password })
				.then(
					function(res) {
						switch (res.status) {
							case 200:
								alert('Authentication successful\n\n' + res.body.token);
							break;
							case 202:
								alert('Authentication message sent');
							break;
							default:
								// umm ... something broke ...
							break;
						}
					},
					function(res) {
						if (res.status === 401) {
							return self.showError('Username or password was incorrect');
						}

						self.showError('An unknown error occured on our server; Please try your request again');
					}
				);
		},

		showError: function(message) {
			var $error = this.$('.error');
			
			if (! message) {
				$error.html('');
				$error.addClass('hide');
				return;
			}
			
			$error.html(message);
			$error.removeClass('hide');
		}
	}

});
 
 }; /* ==  End source for module /views/welcome/nav/modals/login/login.js  == */ return module; }());;