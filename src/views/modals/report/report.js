
var auth       = require('common/auth');
var ModalView  = require('views/modal/modal');
var Request    = require('cloak/model-stores/dagger').Request;

// 
// Opens a new report modal
// 
exports.open = ModalView.template({

	classname: 'report',
	template: 'views/modals/report/report.hbs',
	
	events: {
		'click button':    'submit'
	},
	
	props: {
		submit: function(evt) {
			if (evt) {
				evt.preventDefault();
			}

			var self = this;
			var $report = this.$('div.report');
			var subject = this.$('.subject').val();
			var description = this.$('.description').val();

			this.showError();

			if (! subject || ! description) {
				this.showError('Both subject and description are required');
				return;
			}

			this.disable(true);

			Request.send('POST', '/report-issue', {subject: subject, description: description})
				.then(
					function(res) {
						self.disable(false);
						$report.html('<p>Thank you for helping us make Collabish better</p>');
						setTimeout(function() {
							self.close();
						}, 3000);
					},
					function(res) {
						self.disable(false);
						self.showError('Something went wrong, and we could not send your report');
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
