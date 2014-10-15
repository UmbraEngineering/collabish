
var View                   = require('cloak/view');
var DashboardDocumentView  = require('views/dashboard/document/document');

var User = require('models/user');
var Document = require('models/document');
var Revision = require('models/revision');

var DashboardView = module.exports = View.extend({

	className: 'dashboard',
	template: 'views/dashboard/dashboard.hbs',

	events: {
		// 
	},

	initialize: function() {
		this.documents = [ ];

		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$documents = this.$('section.documents');

		this.bindEvents();
	},

	drawDocuments: function() {
		var $documents = this.$documents;

		this.documents.forEach(function(document) {
			var view = new DashboardDocumentView(document);
			view.$elem.appendTo($documents);
			view.draw();
		});
	}

});
