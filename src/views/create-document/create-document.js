
var View           = require('cloak/view');
var TagEditorView  = require('views/tag-editor/tag-editor');

var CreateDocumentView = module.exports = View.extend({

	className: 'create-document',
	template: 'views/create-document/create-document.hbs',

	events: {
		'click button.submit':    'submit'
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$name          = this.$('.name input');
		this.$description   = this.$('.description input');
		this.$adultContent  = this.$('.adult-content input');
		this.$public        = this.$('.privacy .public input');

		this.tagEditor = new TagEditorView();
		this.tagEditor.$elem.appendTo(this.$('.tags'));
		this.tagEditor.draw();

		this.bindEvents();
	},

// --------------------------------------------------------

	submit: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var data = this.getData();

		// 
	},

	getData: function() {
		return {
			name: this.$name.val(),
			description: this.$description.val(),
			adultContent: this.$adultContent.prop('checked'),
			public: this.$public.prop('checked'),
			tags: this.tagEditor.tags.slice()
		};
	}

});
