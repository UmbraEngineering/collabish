;require._modules["/models/document.js"] = (function() { var __filename = "/models/document.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/document.js  == */ var __module__ = function() { 
 
var Model     = require('cloak/model');
var Request   = require('cloak/model-stores/dagger').Request;
var User      = require('models/user');
var Revision  = require('models/revision');

var Document = module.exports = Model.extend({

	url: '/documents{/#}',

	attributes: {
		name: '',
		description: '',
		public: false,
		owner: User,
		created: null,
		updated: null,
		collaborators: User.Collection,
		mainRevision: Revision,
		adultContent: false,
		tags: null
	},

	// 
	// Fetch a list of revisions from the server
	// 
	// @return promise
	// 
	fetchRevisions: function() {
		return Request.send('GET', '/documents/' + this.id() + '/revisions')
			.then(function(res) {
				return (new Revision.Collection()).add(res.body);
			});
	}

});

// 
// Do a query for documents
// 
// @param {data} the query
// @return promise
// 
Document.find = function(data) {
	return Request.send('GET', '/documents', data)
		.then(function(res) {
			return (new Document.Collection()).add(res.body);
		});
};

// 
// Do a query to find documents by a given user
// 
// @param {user} the user's id or user model
// @return promise
// 
Document.findByOwner = function(user) {
	if (user instanceof User) {
		return user.fetchDocuments();
	}

	return Document.find({
		filter: {owner: user}
	});
};
 
 }; /* ==  End source for module /models/document.js  == */ return module; }());;