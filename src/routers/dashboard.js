
var cloak               = require('cloak');
var Router              = require('cloak/router');
var auth                = require('common/auth');
var User                = require('models/user');
var DashboardView       = require('views/dashboard/dashboard');
var CreateDocumentView  = require('views/create-document/create-document');
var ProfileView         = require('views/profile/profile');
var QuillView           = require('views/quill/quill');
var Request             = require('cloak/model-stores/dagger').Request;

var Document = require('models/document');

var DashboardRouter = module.exports = Router.extend({

	routes: {
		'/dashboard':       'dashboard',
		'/create':          'createDocument',
		'/user/:username':  'profile',
		'/quill':           'quill'
	},

	initialize: function() {
		// 
	},

// --------------------------------------------------------
	
	// 
	// The logged-in home page, the main dashboard
	// 
	dashboard: function() {
		document.title = 'Dashboard / Collabish';

		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		var view = new DashboardView();
		var renderPromise = this.parent.renderView(view);

		Promise.all([ auth.user.fetchDocuments({ sort: '-updated' }), renderPromise ])
			.then(function(docs) {
				view.documents = docs[0];
				view.drawDocuments();
			});

		Promise.all([ auth.user.fetchRecentlyStarred(), renderPromise ])
			.then(function(docs) {
				view.recent = docs[0];
				view.drawRecentlyStarred();
			});
	},

// --------------------------------------------------------

	// 
	// Create document page
	// 
	createDocument: function() {
		document.title = 'Create Document / Collabish';

		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		this.parent.renderView(new CreateDocumentView());
	},

// --------------------------------------------------------

	// 
	// User profile screen
	// 
	profile: function(params) {
		document.title = params.username + ' / Profile / Collabish';

		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		var user;
		var view = new ProfileView(params.username);
		var renderPromise = this.parent.renderView(view);

		Promise.all([ User.findByUsername(params.username), renderPromise ])
			.then(
				function(_user) { user = _user[0]; },
				function() {
					view.showNotfound();
					return Promise.reject();
				}
			)
			.then(function() {
				return Document.findByOwner(user);
			})
			.then(function(docs) {
				view.user = user;
				view.documents = docs;

				view.drawUser();
			});
	},

// --------------------------------------------------------

	quill: function() {
		document.title = 'Quill Demo / Collabish';
		this.parent.renderView(new QuillView());
	}

});