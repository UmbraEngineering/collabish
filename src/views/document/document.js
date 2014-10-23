
var $            = require('jquery');
var View         = require('cloak/view');
var auth         = require('common/auth');
var Comment      = require('models/comment');
var StarsView    = require('views/document/stars/stars');
var announce     = require('common/announce');
var QuillEditor  = require('views/quill/quill');

var DocumentView = module.exports = View.extend({

	className: 'document',
	template: 'views/document/document.hbs',
	commentTemplate: 'views/document/comment.hbs',

	events: {
		'click .description .edit':           'editDescription',
		'click .description .save':           'saveDescription',
		'click .description .cancel':         'cancelDescription',
		'focus .comments textarea.pseudo':    'showCommentEditor',
		'click .comments .post.button':       'postComment',
		'click .comments .cancel.button':     'cancelComment'
	},

	initialize: function(document) {
		this.document = document;
		this.commentCount = 0;

		this.commentBoxOptions = {
			buttons: [
				{text: 'Post Comment', classname: 'small action button post'},
				{text: 'Cancel', classname: 'small secondary button cancel'}
			]
		};
	},

	draw: function() {
		this.$elem.html('<div class="spinner"></div>');
		this.$('.spinner').spin(true, {size: 'large'});
	},

	drawDocument: function() {
		this.$elem.html(this.render({
			isOwner: (this.document.get('owner').id() === auth.user.id()),
			document: this.document.serialize({ deep: true }),
			recentCommits: this.document.get('history').slice().reverse().slice(0, 10)
		}));
	
		this.bindPartials({
			stars: StarsView,
			quill: QuillEditor
		});

		this.$description  = this.$('.description');
		this.$comments     = this.$('section.comments');
		this.$commentList  = this.$('section.comments ol');

		this.bindEvents();
	},

// --------------------------------------------------------

	editDescription: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.$description.html(
			'<textarea>' + this.document.get('description') + '</textarea>' +
			'<a class="cancel">Cancel</a> | <a class="save">Save</a>' +
			'<div class="spinner"></div>'
		);
	},

	saveDescription: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var self = this;
		var desc = this.document.get('description');

		this.disableDescription(true);
		this.document
			.set('description', this.$description.find('textarea').val())
			.patch('description')
			.then(function() {
				self.cancelDescription();
			})
			.catch(function(res) {
				self.document.set('description', desc);
				announce.show('alert', res.body.message);
			});
	},

	cancelDescription: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.$description.html(
			'<p>' + this.document.get('description') + ' <a class="edit">Edit</a></p>'
		);
	},

	disableDescription: function(flag) {
		this.$description.find('textarea, a').disable(flag);
		this.$description.find('.spinner').spin(flag, {size: 'tiny'});
	},

// --------------------------------------------------------

	drawNewComment: function(topOrBottom, comment, gravatarHash) {
		var func = (topOrBottom === 'top') ? 'prepend' : 'append';

		if (comment instanceof Comment) {
			comment = comment.serialize({ deep: true });
		}

		var $li = $('<li></li>');
		var data = {
			comment: comment,
			gravatarHash: gravatarHash
		};

		$li.hide();
		$li[func + 'To'](this.$commentList);
		$li.html(this.render(data, 'commentTemplate'));
		$li.animate({ opacity: 'show', height: 'show' }, 600, function() {
			// 
		});
	},

	drawComments: function(comments) {
		// If given a single comment, put it inside a collection to normalize
		if (comments instanceof Comment) {
			comments = (new Comment.Collection()).add(comments);
		}

		if (! (comments && comments.len())) {
			if (this.commentCount) {
				this.$comments.append('<p class="no-results">There are no more comments</p>');
			} else {
				this.$comments.append('<p class="no-results">There are no comments</p>');
			}
			return;
		}

		var self = this;
		comments.forEach(function(comment) {
			self.drawNewComment('bottom', comment, comment.get('author').gravatarHash());
		});
	},

	showCommentEditor: function() {
		this.$comments.find('textarea.pseudo').css('display', 'none');
		this.$comments.find('section.quill').css('display', 'block');
		this.commentBox.quill.focus();
	},

	hideCommentEditor: function() {
		this.$comments.find('textarea.pseudo').css('display', 'block');
		this.$comments.find('section.quill').css('display', 'none');
	},

	postComment: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var self = this;
		var content = this.commentBox.quill.getHTML();

		this.document.postComment(content)
			.then(
				function(comment) {
					self.cancelComment();

					comment = comment.serialize();
					comment.author = auth.user.serialize();

					self.drawNewComment('top', comment, auth.user.gravatarHash());
				},
				function(res) {
					announce.show('alert', (res && res.body && res.body.message) || res);
				}
			);
	},

	cancelComment: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.commentBox.quill.setHTML('<div></div>');
		this.hideCommentEditor();
	}

});
