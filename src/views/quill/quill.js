
var $      = require('jquery');
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
		this.enableAtwho = opts && opts.atwho;

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

		this.$root = $(this.quill.root);

		if (this.atwho) {
			this.initAtwho();
		}

		this.emit('ready');
	},

	setContents: function(content) {
		this.quill.setContents(content);
	},

	getContents: function() {
		return this.quill.getContents();
	},

	setHTML: function(html) {
		this.quill.setHTML(html);
	},

	getHTML: function() {
		var html = this.quill.getHTML();

		if (this.atwho) {
			// These ugly things are inserted after @username references by At.js, and need to be
			// parsed out before sending to the server
			var atrefSuffix = '<span contenteditable="false">&nbsp;</span>';

			while (html.indexOf(atrefSuffix) >= 0) {
				html = html.replace(atrefSuffix, '');
			}
		}

		return html;
	},

	atwho: function(data) {
		if (Array.isArray(data)) {
			data = {
				at: '@',
				data: data,
				insert_tpl: '<span class="atref" data-user="${name}">${atwho-data-value}</span>'
			};
		}

		this.$root.atwho(data);
	},

	initAtwho: function() {
		this.$root.atwho('setIframe', this.$('iframe')[0]);
		this.$root.atwho({
			at: '@',
			data: this.atwho,
			insert_tpl: '<span class="atref" data-user="${name}">${atwho-data-value}</span>'
		});
	}

});
