;require._modules["/views/tag-editor/tag-editor.js"] = (function() { var __filename = "/views/tag-editor/tag-editor.js"; var __dirname = "/views/tag-editor"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/tag-editor/tag-editor.js  == */ var __module__ = function() { 
 
var View  = require('cloak/view');

var TagEditorView = module.exports = View.extend({

	tagName: 'div',
	className: 'tag-editor',
	template: 'views/tag-editor/tag-editor.hbs',

	events: {
		'click @':           'focus',
		'keydown input':     'keydown',
	},

	initialize: function() {
		this.tags = [ ];
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$tags = this.$('.tags');
		this.$input = this.$('input');

		this.bindEvents();
	},

	focus: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.$input.focus();
	},

	keydown: function(evt) {
		switch (evt.which) {
			// Backspace
			case 8:
				this.backspace(evt);
			break;

			// Tab
			case 9:
			// Return
			case 10:
			case 13:
			// Comma
			case 188:
				this.complete(evt);
			break;
		}
	},

	complete: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var tag = this.$input.val();
		this.$input.val('');
		this.addTag(tag);
	},

	backspace: function(evt) {
		if (! this.$input.val()) {
			this.tags.pop();
			this.drawTags();
		}
	},

	addTag: function(tag) {
		tag = tag.replace(/^\s+/, '').replace(/\s+$/, '');

		if (tag && this.tags.indexOf(tag) < 0) {
			this.tags.push(tag);
		}

		this.drawTags();
	},

	drawTags: function() {
		this.$tags.html(this.tags.map(function(tag) {
			return '<span class="label round">' + tag + '</span>';
		}).join(''));
	}

});
 
 }; /* ==  End source for module /views/tag-editor/tag-editor.js  == */ return module; }());;