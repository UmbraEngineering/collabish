;require._modules["/routers/dashboard.js"] = (function() { var __filename = "/routers/dashboard.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/dashboard.js  == */ var __module__ = function() { 
 
var purl                = require('purl');
var cloak               = require('cloak');
var Router              = require('cloak/router');
var auth                = require('common/auth');
var User                = require('models/user');
var DashboardView       = require('views/dashboard/dashboard');
var CreateDocumentView  = require('views/create-document/create-document');
var ProfileView         = require('views/profile/profile');
var SearchView          = require('views/search/search');
var QuillView           = require('views/quill/quill');
var Request             = require('cloak/model-stores/dagger').Request;

var Document = require('models/document');

var DashboardRouter = module.exports = Router.extend({

	routes: {
		'/dashboard':       'dashboard',
		'/create':          'createDocument',
		'/user/:username':  'profile',
		'/search':          'search',
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

		Promise.all([ auth.user.fetchDocuments({ sort: '-updated', fields: '-current -draft' }), renderPromise ])
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

	search: function() {
		document.title = 'Search Documents / Collabish';

		var view = new SearchView({
			query: purl(location).param()
		});

		this.parent.renderView(view);
	},

// --------------------------------------------------------

	quill: function() {
		document.title = 'Quill Demo / Collabish';
		this.parent.renderView(new QuillView());
	}

}); 
 }; /* ==  End source for module /routers/dashboard.js  == */ return module; }());;