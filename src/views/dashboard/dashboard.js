
var View                   = require('cloak/view');
var DashboardDocumentView  = require('views/dashboard/document/document');

var User = require('models/user');
var Document = require('models/document');
var Revision = require('models/revision');

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
					var view = new DashboardDocumentView(document);
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
