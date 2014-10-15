;require._modules["/views/modals/privacy/privacy.js"] = (function() { var __filename = "/views/modals/privacy/privacy.js"; var __dirname = "/views/modals/privacy"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /views/modals/privacy/privacy.js  == */ var __module__ = function() { 
 
var ModalView = require('views/modal/modal');

// 
// Opens a new privacy modal
// 
exports.open = ModalView.template({
	classname: 'privacy',
	template: 'views/modals/privacy/privacy.hbs'
});
 
 }; /* ==  End source for module /views/modals/privacy/privacy.js  == */ return module; }());;