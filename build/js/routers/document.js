;require._modules["/routers/document.js"] = (function() { var __filename = "/routers/document.js"; var __dirname = "/routers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /routers/document.js  == */ var __module__ = function() { 
 
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
 }; /* ==  End source for module /routers/document.js  == */ return module; }());;