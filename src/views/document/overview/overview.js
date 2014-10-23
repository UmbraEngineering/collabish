
var View       = require('cloak/view');
var moment     = require('moment');
var StarsView  = require('views/document/stars/stars');

var DocumentOverviewView = module.exports = View.extend({

	className: 'document-overview panel',
	template: 'views/document/overview/overview.hbs',

	events: {
		// 
	},

	initialize: function(document) {
		this.document = document;
	},

	draw: function() {
		this.$elem.html(this.render({
			document: this.document.serialize()
		}));

		this.bindEvents();
		
		this.bindPartials({
			stars: StarsView
		});
	}

});
