;require._modules["/common/quill-atref/index.js"] = (function() { var __filename = "/common/quill-atref/index.js"; var __dirname = "/common/quill-atref"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/quill-atref/index.js  == */ var __module__ = function() { 
 
// // 
// // QuillJS module for @user atref support
// // 

// var Quill  = require('quill');
// var merge  = require('merge-recursive');

// Atref.defaults = {
// 	data: [ ]
// };

// function Atref(quill, options) {
// 	this.quill = quill;
// 	this.options = merge({ }, Atref.defaults, options);
// 	this.options.data = this.options.data.slice();

// 	this.preEvent = this.preEvent.bind(this);

// 	this.quill.addFormat('atref', {
// 		tag: 'SPAN',
// 		class: 'atref'
// 	});

// 	this.quill.on(Quill.events.PRE_EVENT, this.preEvent);
// }

// Atref.prototype.preEvent = function(eventName, delta, origin) {
// 	if (eventName === Quill.events.TEXT_CHANGE && origin === 'user') {
// 		atrefDelta = new Delta();
// 		atrefFormat = {
// 			atref: _this.options.authorId
// 		};
// 		_.each(delta.ops, function(op) {
// 			if (op["delete"] != null) {
// 				return;
// 			}
// 			if ((op.insert != null) || ((op.retain != null) && (op.attributes != null))) {
// 				op.attributes || (op.attributes = {});
// 				op.attributes.author = _this.options.authorId;
// 				return authorDelta.retain(op.retain || op.insert.length || 1, authorFormat);
// 			} else {
// 				return authorDelta.retain(op.retain);
// 			}
// 		});
// 		return _this.quill.updateContents(authorDelta, Quill.sources.SILENT);
// 	}
// };

// Quill.registerModule('atref', Atref);
 
 }; /* ==  End source for module /common/quill-atref/index.js  == */ return module; }());;