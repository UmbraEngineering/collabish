
var ModalView  = require('views/modal/modal');

// 
// Opens a new confirm modal
// 
exports.open = ModalView.template({

	classname: 'confirm',
	template: 'views/modals/confirm/confirm.hbs',
	
	events: {
		'click   .yes':    'yes',
		'click   .no':     'no'
	},

	init: function(opts) {
		this.data = {
			prompt: opts.prompt,
			yes: opts.yes || {
				text: 'Yes',
				classname: 'action'
			},
			no: opts.no || {
				text: 'No',
				classname: 'secondary'
			}
		};
	},
	
	props: {
		yes: function(evt) {
			if (evt) {
				evt.preventDefault();
			}

			this.emit('yes');
		},

		no: function(evt) {
			if (evt) {
				evt.preventDefault();
			}

			this.emit('no');
		}
	}

});
