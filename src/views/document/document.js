
var $            = require('jquery');
var View         = require('cloak/view');
var auth         = require('common/auth');
var Comment      = require('models/comment');
var announce     = require('common/announce');
var StarsView    = require('views/document/stars/stars');
var QuillEditor  = require('views/quill/quill');
var CommentView  = require('views/document/comment/comment');
var renderer     = require('quilljs-renderer');
var i18n         = require('common/i18n');

renderer.loadFormat('html');

var DocumentView = module.exports = View.extend({

	className: 'document',
	template: 'views/document/document.hbs',

	events: {
		'click .description .edit':           'editDescription',
		'click .description .save':           'saveDescription',
		'click .description .cancel':         'cancelDescription',
		'focus .comments textarea.pseudo':    'showCommentEditor',
		'click .comments .post.button':       'postComment',
		'click .comments .cancel.button':     'cancelComment',
		'click .comments .load-more':         'loadMoreComments',
		'click nav.panel .continue':          'continueDraft',
		'click nav.panel .start':             'startDraft',
		'click nav.panel .clone':             'cloneDocument',
		'click nav.panel .download':          'downloadDocument'
	},

	initialize: function(document) {
		this.document = document;
		this.commentCount = 0;

		this.commentBoxOptions = {
			atwho: [ ],
			buttons: [
				{text: i18n.translate('comments.post'), classname: 'small action button post'},
				{text: i18n.translate('actions.cancel'), classname: 'small secondary button cancel'}
			]
		};
	},

	draw: function() {
		this.$elem.html('<div class="spinner"></div>');
		this.$('.spinner').spin(true, {size: 'large'});
	},

	drawDocument: function() {
		var isOwner = (this.document.get('owner').id() === auth.user.id());

		this.$elem.html(this.render({
			hasDraft: this.document.hasDraft(),
			hasButtons: isOwner,
			isOwner: isOwner,
			document: this.document.serialize({ deep: true }),
			recentCommits: this.document.get('history').slice().reverse().slice(0, 10)
		}));
	
		this.bindPartials({
			stars: StarsView,
			quill: QuillEditor
		});

		this.commentUsernameAtList = [
			this.document.get('owner').get('username')
		];

		var self = this;
		this.commentBox.on('ready', function() {
			this.atwho(self.commentUsernameAtList);
		});

		this.$writeDropdown   = this.$('.write');
		this.$description     = this.$('.description');
		this.$comments        = this.$('section.comments');
		this.$commentList     = this.$('section.comments ol');
		this.$loadMoreButton  = this.$('section.comments .load-more');

		this.bindEvents();
	},

// --------------------------------------------------------

	continueDraft: function() {
		// 
	},

	startDraft: function() {
		// 
	},

	cloneDocument: function() {
		// 
	},

	downloadDocument: function() {
		// 
	},

// --------------------------------------------------------

	editDescription: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.$description.html(
			'<textarea>' + this.document.get('description') + '</textarea>' +
			'<a class="cancel">' + i18n.translate('actions.cancel') + '</a> | ' +
			'<a class="save">' + i18n.translate('actions.save') + '</a>' +
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
			'<p>' + this.document.get('description') + ' <a class="edit">' + i18n.translate('actions.edit') + '</a></p>'
		);
	},

	disableDescription: function(flag) {
		this.$description.find('textarea, a').disable(flag);
		this.$description.find('.spinner').spin(flag, {size: 'tiny'});
	},

// --------------------------------------------------------

	drawNewComment: function(opts) {
		var drawTo = (opts.drawTo === 'top') ? 'prepend' : 'append';

		var $li = $('<li></li>');
		$li[drawTo + 'To'](this.$commentList);

		var view = new CommentView(opts.comment);
		view.$elem.appendTo($li);
		view.draw({ animate: opts.animate });

		this.commentCount++;
	},

	drawComments: function(comments) {
		// If given a single comment, put it inside a collection to normalize
		if (comments instanceof Comment) {
			comments = (new Comment.Collection()).add(comments);
		}

		if (! (comments && comments.len())) {
			if (this.commentCount) {
				this.$comments.append('<p class="no-results">' + i18n.translate('comments.no_more') + '</p>');
			} else {
				this.$comments.append('<p class="no-results">' + i18n.translate('comments.no_comments') + '</p>');
			}
			this.$loadMoreButton.remove();
			return;
		}

		var self = this;
		comments.forEach(function(comment) {
			self.drawNewComment({
				drawTo: 'bottom',
				comment: comment,
				animate: false
			});
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
		var content = this.commentBox.getContents().ops;

		this.commentBox.disable(true);

		this.document.postComment(content)
			.then(
				function(comment) {
					self.cancelComment();

					comment.set('author', auth.user.clone());

					self.drawNewComment({
						drawTo: 'top',
						comment: comment,
						animate: true
					});
				},
				function(res) {
					self.commentBox.disable(false);
					announce.show('alert', (res && res.body && res.body.message) || res);
				}
			);
	},

	cancelComment: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		this.commentBox.setHTML('<div></div>');
		this.hideCommentEditor();
	},

	loadMoreComments: function(evt) {
		if (evt) {
			evt.preventDefault();
		}

		var self = this;

		this.$loadMoreButton.disable(true);

		this.document.findComments({
			populate: 'author',
			sort: '-created',
			offset: this.commentCount
		})
			.then(
				function(comments) {
					self.$loadMoreButton.disable(false);

					if (! comments.len()) {
						self.$loadMoreButton.remove();
					}

					self.drawComments(comments);
				},
				function(res) {
					self.$loadMoreButton.disable(false);
					announce.show('alert', res.body.message || res.body);
				}
			);
	}

});
