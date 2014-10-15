
var View    = require('cloak/view');
var moment  = require('moment');

var DashboardDocumentView = module.exports = View.extend({

	className: 'document panel',
	template: 'views/dashboard/document/document.hbs',

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
	}

});
