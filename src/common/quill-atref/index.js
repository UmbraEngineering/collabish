
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
