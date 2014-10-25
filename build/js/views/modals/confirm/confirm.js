;require._modules["/views/modals/confirm/confirm.js"] = (function() { var __filename = "/views/modals/confirm/confirm.js"; var __dirname = "/views/modals/confirm"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/modals/confirm/confirm.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /views/modals/confirm/confirm.js  == */ return module; }());;