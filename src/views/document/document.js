
var View    = require('cloak/view');
var moment  = require('moment');

var DocumentView = module.exports = View.extend({

	className: 'document',
	template: 'views/document/document.hbs',

	events: {
		// 
	},

	initialize: function(document) {
		this.document = document;
	},

	draw: function() {
		this.$elem.html('<div class="spinner"></div>');
		this.$('.spinner').spin(true, {size: 'large'});
		this.bindEvents();
	},

	drawDocument: function() {
		this.$elem.html(this.render({
			document: this.document.serialize({ deep: true })
		}));
	}

});
