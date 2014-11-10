;require._modules["/models/document.js"] = (function() { var __filename = "/models/document.js"; var __dirname = "/models"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /models/document.js  == */ var __module__ = function() { 
 
var Model     = require('cloak/model');
var Request   = require('cloak/model-stores/dagger').Request;
var User      = require('models/user');
var Comment   = require('models/comment');
var renderer  = require('quilljs-renderer');

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
		adultContent: false,
		allowComments: true,
		tags: null,
		current: null,
		draft: null,
		history: null,
		isStarred: false
	},

	// 
	// Stars the document
	// 
	// @return promise
	// 
	star: function() {
		var self = this;

		this.set('isStarred', true);
		return Request.send('POST', '/documents/' + this.id() + '/star')
			.then(
				function(res) {
					// 
				},
				function(res) {
					self.set('isStarred', false);
				}
			);
	},

	// 
	// Unstars the document
	// 
	// @return promise
	// 
	unstar: function() {
		var self = this;

		this.set('isStarred', false);
		return Request.send('DELETE', '/documents/' + this.id() + '/star')
			.then(
				function(res) {
					// 
				},
				function(res) {
					self.set('isStarred', true);
				}
			);
	},

	// 
	// Save a draft to the document
	// 
	// @param {delta} the draft delta
	// @return promise
	// 
	saveDraft: function(delta) {
		// 
	},

	// 
	// Does a find query for all comments belonging to this document
	// 
	// @return {promise}
	// 
	findComments: function(query) {
		return Request.send('GET', this.subUrl('/comments'), query)
			.then(function(res) {
				return (new Comment.Collection()).add(res.body);
			});
	},

	// 
	// Posts a new comment to this document
	// 
	// @param {content} the comment content
	// @return promise
	// 
	postComment: function(content) {
		return Request.send('POST', this.subUrl('/comments'), {content: content})
			.then(function(res) {
				return new Comment(res.body);
			});
	},

	// 
	// 
	// 
	render: function() {
		var content = this.get('current').composed;
		return (new renderer.Document(content)).convertTo('html', {
			line: '<p class="line" style="{lineStyle}">{content}</p>'
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
// Find a specific document by ID
// 
// @param {id} the document id
// @param {data} addition query params
// @return promise
// 
Document.findById = function(id, data) {
	return Request.send('GET', '/documents/' + id, data)
		.then(function(res) {
			return Document.create(res.body);
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