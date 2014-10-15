
var View  = require('cloak/view');

var CreateDocumentView = module.exports = View.extend({

	className: 'create-document',
	template: 'views/create-document/create-document.hbs',

	events: {
		// 
	},

	initialize: function() {
		// 
	},

	draw: function() {
		this.$elem.html(this.render());

		this.bindEvents();
	}

});
