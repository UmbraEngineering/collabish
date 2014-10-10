
var View  = require('cloak/view');
var _     = require('cloak/underscore');

var ModalView = module.exports = View.extend({

	className: 'modal wrapper',
	template: 'views/modal/modal.hbs',

	events: {
		'click .modal.close':    'close'
	},

	initialize: function() {
		// 
	},

	draw: function(content, classname) {
		if (! content && this.contentTemplate) {
			content = this.render({ }, 'contentTemplate');
		}

		this.$elem.html(this.render({
			content: content,
			classname: classname || this.classname || ''
		}));

		this.bindEvents();
	},

	close: function() {
		var self = this;

		this.$elem.removeClass('open');
		this.emit('close');
		
		setTimeout(function() {
			self.remove();
		}, 500);
	}

});

// 
// Creates and opens a modal view in one call
// 
ModalView.open = function(content, classname) {
	var view = new ModalView();

	view.draw(content, classname);
	view.$elem.appendTo(document.body);

	// Need to give the browser a moment to render before the re-render
	// will cause an animation
	setTimeout(function() {
		view.$elem.addClass('open');
	}, 13);

	return view;
};

// 
// Returns a new function that opens a specific type of modal
// 
// @param {defaults} the options for creating the modal
// @return function
// 
ModalView.template = function(defaults) {
	return function(opts) {
		opts = _.defaults(opts || { }, defaults);

		var modal = new ModalView();

		modal.contentTemplate = opts.template;
		modal.classname = opts.classname;

		_.extend(modal, opts.props || { });
		modal.events = _.extend({ }, modal.events, opts.events || { });

		modal.draw();
		modal.$elem.appendTo(document.body);

		setTimeout(function() {
			modal.$elem.addClass('open');
		}, 13);

		return modal;
	};
};
