
var Model     = require('cloak/model');
var User      = require('models/user');
var Document  = require('models/document');

var Comment = module.exports = Model.extend({

	url: '/documents/{document}/comments{/#}',

	attributes: {
		document: Document,
		author: User,
		content: null,
		created: null,
		updated: null
	}

});
