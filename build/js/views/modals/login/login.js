;require._modules["/views/modals/login/login.js"] = (function() { var __filename = "/views/modals/login/login.js"; var __dirname = "/views/modals/login"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/modals/login/login.js  == */ var __module__ = function() { 
 
var auth       = require('common/auth');
var ModalView  = require('views/modal/modal');
var Request    = require('cloak/model-stores/dagger').Request;

// 
// Opens a new login modal
// 
exports.open = ModalView.template({

	classname: 'login',
	template: 'views/modals/login/login.hbs',
	
	events: {
		'click button':    'login'
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

			this.disable(true);

			auth.login(username, password)
				.then(
					function(result) {
						self.disable(false);

						if (result.complete) {
							router.redirectTo('/dashboard');
						} else {
							router.redirectTo('/auth/twostep');
						}
						
						self.close();
					},
					function(err) {
						self.disable(false);
						self.showError(err);
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
		},

		disable: function(flag) {
			this.$('input, button').prop('disabled', flag);

			if (flag) {
				this.$('button').spin(true, {replace: false, size: 'tiny', classname: 'transparent'});
			} else {
				this.$('button').spin(false);
			}
		}
	}

});
 
 }; /* ==  End source for module /views/modals/login/login.js  == */ return module; }());;