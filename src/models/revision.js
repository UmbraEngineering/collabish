
var Model     = require('cloak/model');
var Request   = require('cloak/model-stores/dagger').Request;
var Document  = require('models/document');

var Revision = module.exports = Model.extend({

	url: '/revisions{/#}',

	attributes: {
		name: '',
		content: '',
		public: false,
		created: null,
		updated: null,
		document: Document
	}

});

// 
// Do a query for revisions
// 
// @param {data} the query
// @return promise
// 
Revision.find = function(data) {
	return Request.send('GET', '/revisions', data)
		.then(function(res) {
			return (new Revision.Collection()).add(res.body);
		});
};
