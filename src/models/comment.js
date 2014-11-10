
var Model     = require('cloak/model');
var User      = require('models/user');
var Document  = require('models/document');
var renderer  = require('quilljs-renderer');

var Comment = module.exports = Model.extend({

	url: '/documents/{document}/comments{/#}',

	attributes: {
		document: Document,
		author: User,
		content: null,
		created: null,
		updated: null
	},

// --------------------------------------------------------

	render: function() {
		var comment = new renderer.Document(this.get('content'));

		return comment.convertTo('html', {
			line: '<p class="line" style="{lineStyle}">{content}</p>'
		});
	}

});
