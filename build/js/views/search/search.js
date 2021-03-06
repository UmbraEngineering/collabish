;require._modules["/views/search/search.js"] = (function() { var __filename = "/views/search/search.js"; var __dirname = "/views/search"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/search/search.js  == */ var __module__ = function() { 
 
var _              = require('cloak/underscore');
var View           = require('cloak/view');
var auth           = require('common/auth');
var TagEditorView  = require('views/tag-editor/tag-editor');

var SearchView = module.exports = View.extend({

	className: 'search',
	template: 'views/search/search.hbs',

	events: {
		'click .action.button':    'search'
	},

	initialize: function(opts) {
		this.query = opts.query;
	},

	draw: function() {
		this.$elem.html(this.render());

		this.$query         = this.$('.query input');
		this.$tags          = this.$('.tags');
		this.$tagsType      = this.$('.tags-type input');
		this.$adultContent  = this.$('.adult-content input');
		this.$created       = this.$('.created select');
		this.$updated       = this.$('.updated select');

		this.tagEditor = new TagEditorView({ allowExclusion: true });
		this.tagEditor.$elem.appendTo(this.$tags);
		this.tagEditor.draw();

		if (this.query) {
			if (this.query.tags) {
				var addTag = this.tagEditor.addTag.bind(this.tagEditor);
				this.query.tags.split(',').forEach(addTag);
			}
		}

		this.bindEvents();
	},

	search: function(evt) {
		if (evt.preventDefault) {
			evt.preventDefault();
		}

		var querystring = '?';
		
		var query = this.$query.val();
		if (query) {
			querystring += param('query', query);
		}

		var tags = this.tagEditor.tags.join(',');
		if (tags) {
			querystring += param('tags', tags);
			querystring += param('tagging', this.$tagsType.filter(':checked').val());
		}

		querystring += param('adult', this.$adultContent.filter(':checked').val());

		var created = this.$created.val();
		if (created !== 'any') {
			querystring += param('created', created);
		}

		var updated = this.$updated.val();
		if (updated !== 'any') {
			querystring += param('updated', updated);
		}

		querystring = querystring.substring(0, querystring.length - 1);

		router.redirectTo('/search/results' + querystring);
	}

});

function param(name, value) {
	return name + '=' + encodeURIComponent(value) + '&';
}
 
 }; /* ==  End source for module /views/search/search.js  == */ return module; }());;