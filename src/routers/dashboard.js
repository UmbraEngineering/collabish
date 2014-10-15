
var cloak               = require('cloak');
var Router              = require('cloak/router');
var auth                = require('common/auth');
var DashboardView       = require('views/dashboard/dashboard');
var CreateDocumentView  = require('views/create-document/create-document');
var Request             = require('cloak/model-stores/dagger').Request;

var Document = require('models/document');

var DashboardRouter = module.exports = Router.extend({

	routes: {
		'/dashboard':    'dashboard',
		'/create':       'createDocument'
	},

	initialize: function() {
		// 
	},

// --------------------------------------------------------
	
	// 
	// The logged-in home page, the main dashboard
	// 
	dashboard: function() {
		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		var view = new DashboardView();

		this.parent.renderView(view);

		auth.user.fetchDocuments()
			.then(function(docs) {
				view.documents = docs;
				view.drawDocuments();
			});

		auth.user.fetchRecentlyStarred()
			.then(function(docs) {
				view.recent = docs;
				view.drawRecentlyStarred();
			});
	},

// --------------------------------------------------------

	// 
	// Create document page
	// 
	createDocument: function() {
		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		this.parent.renderView(new CreateDocumentView());
	}

});