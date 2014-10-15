;require._modules["/views/footer/footer.js"] = (function() { var __filename = "/views/footer/footer.js"; var __dirname = "/views/footer"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/footer/footer.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /views/footer/footer.js  == */ return module; }());;