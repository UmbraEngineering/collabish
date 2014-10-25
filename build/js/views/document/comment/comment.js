;require._modules["/views/document/comment/comment.js"] = (function() { var __filename = "/views/document/comment/comment.js"; var __dirname = "/views/document/comment"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/document/comment/comment.js  == */ var __module__ = function() { 
 
var $             = require('jquery');
var View          = require('cloak/view');
var auth          = require('common/auth');
var Comment       = require('models/comment');
var announce      = require('common/announce');
var QuillEditor   = require('views/quill/quill');
var ConfirmModal  = require('views/modals/confirm/confirm');

var CommentView = module.exports = View.extend({

	tagName: 'article',
	className: 'comment',
	attributes: {rel: 'comment'},
	template: 'views/document/comment/comment.hbs',

	events: {
		'click .edit':     'editComment',
		'click .delete':   'deleteComment',
		'click .reply':    'replyToComment'
	},

	initialize: function(comment) {
		this.comment = comment;
		this.author = comment.get('author');
	},

	draw: function(opts) {
		opts = opts || { };

		if (opts.animate) {
			this.$elem.hide();
		}

		this.$elem.html(this.render({
			comment: this.comment.serialize({ deep: true }),
			gravatarHash: this.author.gravatarHash(),
			isAuthor: this.author.is(auth.user)
		}));

		if (opts.animate) {
			this.$elem.animate({ opacity: 'show', height: 'show' }, 600);
		}

		this.bindEvents();
	},

// --------------------------------------------------------

	editComment: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		// 
	},

	deleteComment: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var self = this;
		var confirm = ConfirmModal.open({
			prompt: 'Are you sure you want to delete the comment?',
			yes: { text: 'Yes, delete the comment', classname: 'alert' },
			no:  { text: 'Cancel',                  classname: 'secondary' }
		});

		confirm.on('no', confirm.close);
		confirm.on('yes', function() {
			confirm.close();

			self.$elem.addClass('disabled');
			
			self.comment.del().then(
				function() {
					self.$elem.animate({ height: 'hide', opacity: 'hide' }, 600, function() {
						self.$elem.parent().remove();
						self.remove();
					});
				},
				function(res) {
					self.$elem.removeClass('disabled');
					announce.show('alert', (res.body.message || res.body));
				}
			);
		});
	},

	replyToComment: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		// 
	}

});
 
 }; /* ==  End source for module /views/document/comment/comment.js  == */ return module; }());;