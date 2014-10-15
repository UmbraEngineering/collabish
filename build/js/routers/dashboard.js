;require._modules["/routers/dashboard.js"] = (function() { var __filename = "/routers/dashboard.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/dashboard.js  == */ var __module__ = function() { 
 
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
		var renderPromise = this.parent.renderView(view);

		Promise.all([ auth.user.fetchDocuments(), renderPromise ])
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
		if (! auth.user) {
			this.redirectTo('/');
			return;
		}

		this.parent.renderView(new CreateDocumentView());
	}

}); 
 }; /* ==  End source for module /routers/dashboard.js  == */ return module; }());;