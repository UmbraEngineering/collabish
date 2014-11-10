
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
		'/document/:id/read/:commit':    'readDocument'
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
		var documentQuery = Document.findById(params.id, {populate: 'owner'});

		Promise.all([ documentQuery, renderPromise ])
			.then(function(results) {
				view.document = results[0];
				view.drawDocument();
			})
			.catch(function(err) {
				console.error(err.stack || err);
			});

		if (params.commit) {
			// TODO
		} else {
			// 
		}
	}

});