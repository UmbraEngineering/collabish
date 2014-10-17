
var Quill  = require('quill');
var View   = require('cloak/view');
var auth   = require('common/auth');

var QuillView = module.exports = View.extend({

	className: 'quill',
	template: 'views/quill/quill.hbs',

	events: {
		// 
	},

	initialize: function(opts) {
		this.quill = null;
		this.bind('initQuill');
		this.buttons = opts && opts.buttons;
		this.content = opts && opts.content;

		if (this.buttons) {
			this.buttons = this.buttons.map(function(button) {
				var tooltip = (button.tooltip ? ' data-tooltip="' + button.tooltip + '"' : '');
				return [
					'<a class="' + (button.classname || '') + '"' + tooltip + '>',
						(button.text ? button.text : ''),
						(button.icon ? '<i class="fa fa-' + button.icon + '"></i>' : ''),
					'</a>'
				].join('');
			});
		}
	},

	draw: function() {
		this.$elem.html(this.render({
			buttons: this.buttons
		}));

		this.$toolbar  = this.$('.toolbar');
		this.$editor   = this.$('.editor');

		// I have no idea why this needs to be async ... but now it works ...
		// fuck you too, quill ... >_>
		setTimeout(this.initQuill, 13);

		this.bindEvents();
	},

	initQuill: function() {
		this.quill = new Quill(this.$editor[0], {
			styles: {
				'body': {
					'font-size': '16px'
				}
			},
			modules: {
				toolbar: {
					container: this.$toolbar[0]
				}
			}
		});

		if (this.content) {
			this.setContents(this.content);
		}
	},

	setContents: function(content) {
		this.quill.setContents(content);
	},

	getContents: function() {
		return this.quill.getContents();
	}

});
