
var _              = require('cloak/underscore');
var View           = require('cloak/view');
var auth           = require('common/auth');
var TagEditorView  = require('views/tag-editor/tag-editor');

var SearchView = module.exports = View.extend({

	className: 'search',
	template: 'views/search/search.hbs',

	events: {
		// 
	},

	initialize: function(opts) {
		this.query = opts.query;
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$query     = this.$('.query input');
		this.$tags      = this.$('.tags');
		this.$tagsType  = this.$('.tags-type input');

		this.tagEditor = new TagEditorView();
		this.tagEditor.$elem.appendTo(this.$tags);
		this.tagEditor.draw();

		if (this.query) {
			if (this.query.tags) {
				var addTag = this.tagEditor.addTag.bind(this.tagEditor);
				this.query.tags.split(',').forEach(addTag);
			}
		}

		this.bindEvents();
	}

});
