
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
