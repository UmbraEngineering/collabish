;require._modules["/common/handlebars-helpers/moment.js"] = (function() { var __filename = "/common/handlebars-helpers/moment.js"; var __dirname = "/common/handlebars-helpers"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/handlebars-helpers/moment.js  == */ var __module__ = function() { 
 
var moment      = require('moment');
var handlebars  = require('handlebars');

handlebars.registerHelper('moment', function(date, format) {
	return moment(date).format(format);
});

handlebars.registerHelper('now', function(format) {
	return moment().format(format);
});

handlebars.registerHelper('fromNow', function(date) {
	return moment(date).fromNow();
});
 
 }; /* ==  End source for module /common/handlebars-helpers/moment.js  == */ return module; }());;