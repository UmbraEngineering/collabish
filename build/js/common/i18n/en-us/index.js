;require._modules["/common/i18n/en-us/index.js"] = (function() { var __filename = "/common/i18n/en-us/index.js"; var __dirname = "/common/i18n/en-us"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/i18n/en-us/index.js  == */ var __module__ = function() { 
 
// 
// en-us i18n
// 

module.exports = {

	// Basic actions
	'actions': {
		'save':                'Save',
		'cancel':              'Cancel',
		'edit':                'Edit'
	},

	// Comment threads
	'comments': {
		'leave_comment':       'Leave a Comment',
		'no_more':             'There are no more comments',
		'no_comments':         'There are no comments',
		'post':                'Post Comment',
		'load_more':           'Load More Comments'
	},

	// Document Overview Screen
	'doc_overview': {
		'read':                'read',
		'start_reading':       'start reading',
		'author':              'Author',
		'start_draft':         'Start New Draft',
		'continue_draft':      'Continue Draft',
		'clone':               'Clone Document',
		'download':            'Download',
		'history':             'Document History',
		'doc_settings':        'Document Settings',
		'no_buttons':          'No buttons for you!',
		'no_commits':          'This document doesn\'t have any commits yet.',
		'adult_content':       'This document may contain adult content',
		'shared_with':         'This document is shared with {0} collaborators',
		'is_public':           'This document is public',
		'is_private':          'This document is private',
		'collaborators':       'Collaborators',
		'no_collaborators':    'No collaborators'
	}

};
 
 }; /* ==  End source for module /common/i18n/en-us/index.js  == */ return module; }());;