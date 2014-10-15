
var View          = require('cloak/view');
var TermsModal    = require('views/modals/terms/terms');
var ReportModal   = require('views/modals/report/report');
var PrivacyModal  = require('views/modals/privacy/privacy');

var FooterView = module.exports = View.extend({

	template: 'views/footer/footer.hbs',

	events: {
		'click .terms':     'terms',
		'click .privacy':   'privacy',
		'click .report':    'report'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.bindEvents();
	},

	terms: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		TermsModal.open();
	},

	privacy: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		PrivacyModal.open();
	},

	report: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		ReportModal.open();
	}

});
