
var View  = require('cloak/view');
var auth  = require('common/auth');

var DashboardView = module.exports = View.extend({

	className: 'dashboard',
	template: 'views/dashboard/dashboard.hbs',

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
