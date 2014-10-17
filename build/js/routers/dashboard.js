;require._modules["/routers/dashboard.js"] = (function() { var __filename = "/routers/dashboard.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/dashboard.js  == */ var __module__ = function() { 
 
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

		var view = new ProfileView(params.username);
		var renderPromise = this.parent.renderView(view);

		Promise.all([ User.findByUsername(params.username), renderPromise ])
			.then(
				function(user) {
					view.user = user[0];
					view.drawUser();
				},
				function() {
					view.showNotfound();
				}
			);
	},

// --------------------------------------------------------

	quill: function() {
		document.title = 'Quill Demo / Collabish';
		this.parent.renderView(new QuillView());
	}

}); 
 }; /* ==  End source for module /routers/dashboard.js  == */ return module; }());;