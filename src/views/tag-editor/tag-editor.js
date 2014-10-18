
var View  = require('cloak/view');

var TagEditorView = module.exports = View.extend({

	tagName: 'div',
	className: 'tag-editor',
	template: 'views/tag-editor/tag-editor.hbs',

	events: {
		'click @':           'focus',
		'keydown input':     'keydown',
	},

	initialize: function(opts) {
		this.tags = [ ];
		this.exlcudes = [ ];
		this.opts = opts || { };
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

		if (! tag) {
			return;
		}

		if (this.tags.indexOf(tag) < 0) {
			// Is this an exclusion?
			if (tag.charAt(0) === '-') {
				// Exclusions aren't allowed
				if (! this.opts.allowExclusion) {
					return;
				}
				// Already listed as an include
				if (this.tags.indexOf(tag.slice(1)) >= 0) {
					return;
				}
			}
			// Already listed as an exclude
			else if (this.tags.indexOf('-' + tag) >= 0) {
				return;
			}
			this.tags.push(tag);
		}

		this.drawTags();
	},

	drawTags: function() {
		this.$tags.html(this.tags.map(function(tag) {
			var exclude = (tag.charAt(0) === '-') ? ' exclude' : '';
			return '<span class="label round' + exclude + '">' + tag + '</span>';
		}).join(''));
	}

});
