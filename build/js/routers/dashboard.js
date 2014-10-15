;require._modules["/routers/dashboard.js"] = (function() { var __filename = "/routers/dashboard.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/dashboard.js  == */ var __module__ = function() { 
 
var cloak          = require('cloak');
var Router         = require('cloak/router');
var auth           = require('common/auth');
var DashboardView  = require('views/dashboard/dashboard');
var Request        = require('cloak/model-stores/dagger').Request;

var Document = require('models/document');

var DashboardRouter = module.exports = Router.extend({

	routes: {
		'/dashboard':    'dashboard',
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



		setTimeout(function() {
			view.documents.push(
				new Document({
					_id: '123456789',
					name: 'Document One',
					description: 'This is the first document',
					public: false,
					owner: require('common/auth').user.id(),
					created: Date.now(),
					updated: Date.now(),
					collaborators: [ ],
					mainRevision: { },
					adultContent: false,
					tags: [ 'Totally porn' ]
				}),
				new Document({
					_id: '123456789',
					name: 'Document Two',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dui purus, rhoncus in congue nec, semper et risus. Aliquam erat volutpat. Vivamus ultrices fringilla rutrum. Duis porttitor lacus ac nullam.',
					public: true,
					owner: require('common/auth').user.id(),
					created: Date.now(),
					updated: Date.now(),
					collaborators: [ ],
					mainRevision: { },
					adultContent: false,
					tags: [ 'Totally porn' ]
				}),
				new Document({
					_id: '123456789',
					name: 'Document Three',
					description: 'This is yet another document',
					public: false,
					owner: require('common/auth').user.id(),
					created: Date.now(),
					updated: Date.now(),
					collaborators: [ '1234', '2345', '3456' ],
					mainRevision: { },
					adultContent: false,
					tags: [ 'Not porn', 'Food', 'Chocolate' ]
				})
			);
			view.drawDocuments();
		}, 0);
	}

}); 
 }; /* ==  End source for module /routers/dashboard.js  == */ return module; }());;