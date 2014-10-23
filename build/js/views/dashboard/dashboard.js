;require._modules["/views/dashboard/dashboard.js"] = (function() { var __filename = "/views/dashboard/dashboard.js"; var __dirname = "/views/dashboard"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/dashboard/dashboard.js  == */ var __module__ = function() { 
 
var View                  = require('cloak/view');
var DocumentOverviewView  = require('views/document/overview/overview');

var DashboardView = module.exports = View.extend({

	className: 'dashboard',
	template: 'views/dashboard/dashboard.hbs',
	noDocsTemplate: 'views/dashboard/no-docs.hbs',
	noRecentsTemplate: 'views/dashboard/no-recents.hbs',

	events: {
		// 
	},

	initialize: function() {
		this.documents = [ ];
		this.recent = [ ];

		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$documents = this.$('section.documents');
		this.$recent    = this.$('section.recent');

		this.$documents.spin(true, {size: 'medium', classname: 'centered'});
		this.$recent.spin(true, {size: 'medium', classname: 'centered'});

		this.bindEvents();
	},

	drawDocuments: function() {
		this.drawDocumentSection(this.documents, this.$documents, 'noDocsTemplate');
	},

	drawRecentlyStarred: function() {
		this.drawDocumentSection(this.recent, this.$recent, 'noRecentsTemplate');
	},

	drawDocumentSection: function(documents, $documents, noResultsTemplate) {
		var self = this;

		$documents.animate({ opacity: 0 }, 600, function() {
			$documents.spin(false);

			if (documents.len()) {
				documents.forEach(function(document) {
					var view = new DocumentOverviewView(document);
					view.$elem.appendTo($documents);
					view.draw();
				});
			} else {
				$documents.html(self.render({ }, noResultsTemplate));
			}
			
			$documents.animate({ opacity: 1 }, 600);
		});
	}

});
 
 }; /* ==  End source for module /views/dashboard/dashboard.js  == */ return module; }());;