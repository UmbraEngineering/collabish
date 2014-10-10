;require._modules["/views/welcome/nav/nav.js"] = (function() { var __filename = "/views/welcome/nav/nav.js"; var __dirname = "/views/welcome/nav"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/welcome/nav/nav.js  == */ var __module__ = function() { 
 
var View          = require('cloak/view');
var ModalView     = require('views/modal/modal');
var LoginModal    = require('views/welcome/nav/modals/login/login');
var TermsModal    = require('views/welcome/nav/modals/terms/terms');
var PrivacyModal  = require('views/welcome/nav/modals/privacy/privacy');

var WelcomeNavView = module.exports = View.extend({

	template: 'views/welcome/nav/nav.hbs',

	events: {
		'click .login':       'showLogin',
		'click .terms':       'showTerms',
		'click .privacy':     'showPrivacy'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.bindEvents();
	},

// --------------------------------------------------------
	
	// 
	// Shows the login modal
	// 
	showLogin: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.openModal(LoginModal);
	},

	// 
	// Shows the Terms of Use modal
	// 
	showTerms: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.openModal(TermsModal);
	},

	// 
	// Shows the Privacy Policy modal
	// 
	showPrivacy: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.openModal(PrivacyModal);
	},

	// 
	// Opens a modal, and stores a reference to it
	// 
	// @param {modal} the modal to open
	// @return void
	// 
	openModal: function(modal) {
		var self = this;

		if (this.modal) {
			return;
		}

		this.modal = modal.open();
		this.modal.on('close', function() {
			self.modal = null;
		});
	}

});
 
 }; /* ==  End source for module /views/welcome/nav/nav.js  == */ return module; }());;