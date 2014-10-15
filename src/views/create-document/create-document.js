
var View           = require('cloak/view');
var Document       = require('models/document');
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

		this.$error         = this.$('.error');
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
	
	// 
	// Submit the form, creating a new document
	// 
	submit: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var self = this;

		this.showError();
		this.disable(true);

		var data = this.getData();
		if (! this.validate(data)) {
			this.disable(false);
			return;
		}

		var doc = new Document(data);
		doc.save()
			.then(
				function(res) {
					self.disable(false);
					router.redirectTo('/dashboard');
				},
				function(res) {
					self.disable(false);
					if (res.body.message) {
						self.showError(res.body.message);
						return;
					}

					self.showError('An unknown error has occured; please try again');
				}
			);
	},

	// 
	// Fetch the data out of the form for processing
	// 
	getData: function() {
		return {
			name: this.$name.val(),
			description: this.$description.val(),
			adultContent: this.$adultContent.prop('checked'),
			public: this.$public.prop('checked'),
			tags: this.tagEditor.tags.slice()
		};
	},

	// 
	// Do some basic validation before we go to the server
	// 
	validate: function(data) {
		var self = this;

		if (! data.name) {
			return error('The name field is required');
		}

		if (! data.description) {
			return error('The description field is required');
		}

		if (data.name.length > 80) {
			return error('Name cannot be more than 80 characters long');
		}

		if (data.description.length > 200) {
			return error('Description cannot be more than 200 characters long');
		}

		if (data.tags.length > 10) {
			return error('Cannot have more than 10 tags on a single document');
		}

		return true;

		function error(message) {
			self.showError(message);
			return false;
		}
	},

	// 
	// Shows an error message
	// 
	// @param {message} the message to display
	// 
	showError: function(message) {
		if (! message) {
			this.$error.html('');
			this.$error.addClass('hide');
			return;
		}

		this.$error.html(message);
		this.$error.removeClass('hide');
	},

	// 
	// Disable the form
	// 
	disable: function(flag) {
		this.$('input, select, button').prop('disabled', flag);

		if (flag) {
			this.$('button').spin(true, {replace: false, size: 'tiny', classname: 'transparent'});
		} else {
			this.$('button').spin(false);
		}
	},

});
