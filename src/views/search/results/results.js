
var _                     = require('cloak/underscore');
var View                  = require('cloak/view');
var auth                  = require('common/auth');
var DocumentOverviewView  = require('views/document/overview/overview');

var SearchResultsView = module.exports = View.extend({

	className: 'search-results',
	template: 'views/search/results/results.hbs',
	searchingTemplate: 'views/search/results/searching.hbs',

	events: {
		// 
	},

	initialize: function() {
		this.documents = null;
	},

	draw: function() {
		this.$elem.html(this.render(null, 'searchingTemplate'));
	},

	drawResults: function() {
		var self = this;
		this.$elem.animate({ 'opacity': 'hide' }, 600, function() {
			self.$elem.html(self.render({
				documents: self.documents.serialize()
			}));

			self.docs = [ ];
			self.bindPartials({
				document: DocumentOverviewView
			});

			self.$elem.animate({ 'opacity': 'show' }, 600, function() {
				// 
			});
		});
	}

});
