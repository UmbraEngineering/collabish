
var View    = require('cloak/view');
var moment  = require('moment');

var ReadView = module.exports = View.extend({

	className: 'read',
	template: 'views/document/read/read.hbs',

	events: {
		// 
	},

	initialize: function() {
		this.commit = null;
		this.document = null;
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
