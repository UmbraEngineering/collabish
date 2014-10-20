
var purl          = require('purl');
var cloak         = require('cloak');
var Router        = require('cloak/router');
var auth          = require('common/auth');
var User          = require('models/user');
var DocumentView  = require('views/document/document');
var Request       = require('cloak/model-stores/dagger').Request;

var Document = require('models/document');

var DocumentRouter = module.exports = Router.extend({

	routes: {
		'/document/:id':       'overview',
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
			populate: 'owner collaborators'
		});

		Promise.all([ documentQuery, renderPromise ])
			.then(function(results) {
				view.document = results[0].models[0];
				document.title = view.document.get('name') + ' / Collabish';
				view.drawDocument();
			});
	}

});