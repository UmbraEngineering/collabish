
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
			content: this.comment.render(),
			comment: this.comment.serialize({ deep: true }),
			gravatarHash: this.author.gravatarHash(),
			isAuthor: this.author.is(auth.user)
		}));

		this.$('[data-user]').each(function() {
			var $this = $(this);
			var user = $this.attr('data-user');
			$this.replaceWith('<a href="/#user/' + user + '" class="atref">@' + user + '</a>');
		});

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

		announce.show('alert', 'Comment editing is not yet supported');
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

		announce.show('alert', 'Comment replies are not yet supported');
	}

});
