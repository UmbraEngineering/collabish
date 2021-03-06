;require._modules["/routers/document.js"] = (function() { var __filename = "/routers/document.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/document.js  == */ var __module__ = function() { 
 
var purl              = require('purl');
var cloak             = require('cloak');
var Router            = require('cloak/router');
var auth              = require('common/auth');
var User              = require('models/user');
var DocumentView      = require('views/document/document');
var DocumentReadView  = require('views/document/read/read');
var Request           = require('cloak/model-stores/dagger').Request;

var Document = require('models/document');

var DocumentRouter = module.exports = Router.extend({

	routes: {
		'/document/:id':                 'overview',
		'/document/:id/read':            'readDocument',
		'/document/:id/read/:commit':    'readDocument',
		'/document/:id/settings':        'documentSettings'
	},

	initialize: function() {
		// 
	},

// --------------------------------------------------------
	
	// 
	// Document overview screen
	// 
	overview: function(params) {
		document.title = 'Document / Collabish';

		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		var view = new DocumentView();
		var renderPromise = this.parent.renderView(view);

		var documentQuery = Document.find({
			filter: {
				_id: params.id
			},
			populate: 'owner,collaborators,history'
		});

		Promise.all([ documentQuery, renderPromise ])
			.then(function(results) {
				view.document = results[0].models[0];
				document.title = view.document.get('name') + ' / Collabish';
				view.drawDocument();

				// Once the basics are rendered, start loading comments
				return view.document.findComments({ populate: 'author', sort: '-created' });
			})
			.then(function(comments) {
				view.drawComments(comments);
			})
			.catch(function(err) {
				console.error(err.stack || err);
			});
	},

// --------------------------------------------------------
	
	// 
	// Document reading screen
	// 
	readDocument: function(params) {
		document.title = 'Read Document / Collabish';

		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		var view = new DocumentReadView();
		var renderPromise = this.parent.renderView(view);
		var documentQuery = Document.findById(params.id, {populate: params.commit ? 'owner history' : 'owner'});

		Promise.all([ documentQuery, renderPromise ])
			.then(function(results) {
				view.document = results[0];
				view.drawDocument(params.commit);
			})
			.catch(function(err) {
				console.error(err.stack || err);
			});
	},

// --------------------------------------------------------

	// 
	// Document settings screen
	// 
	documentSettings: function() {
		document.title = 'Document - Settings / Collabish';
	}

}); 
 }; /* ==  End source for module /routers/document.js  == */ return module; }());;