;require._modules["/views/document/stars/stars.js"] = (function() { var __filename = "/views/document/stars/stars.js"; var __dirname = "/views/document/stars"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/document/stars/stars.js  == */ var __module__ = function() { 
 
var View    = require('cloak/view');
var moment  = require('moment');

var StarsView = module.exports = View.extend({

	className: 'stars',
	template: 'views/document/stars/stars.hbs',

	events: {
		'click a':    'toggleStarred'
	},

	initialize: function(document) {
		this.document = document;
		this.countWithout = document.get('starredBy');
		if (document.get('isStarred')) {
			this.countWithout--;
		}
	},

	draw: function() {
		this.$elem.html(this.render({
			document: this.document.serialize()
		}));

		this.$count = this.$('a span');

		this.setActive(this.document.get('isStarred'));

		this.bind('updateForDocument');
		this.document.on('change.isStarred', this.updateForDocument);

		this.bindEvents();
	},

	setActive: function(flag) {
		if (flag) {
			this.$elem.addClass('active');
			this.$count.html(this.countWithout + 1);
		} else {
			this.$elem.removeClass('active');
			this.$count.html(this.countWithout);
		}
	},

	toggleStarred: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		if (this.document.get('isStarred')) {
			this.document.unstar();
		} else {
			this.document.star();
		}
	},

	updateForDocument: function(value) {
		this.setActive(value);
	},

	teardown: function() {
		this.document.off('change.isStarred', this.updateForDocument);
	}

});
 
 }; /* ==  End source for module /views/document/stars/stars.js  == */ return module; }());;