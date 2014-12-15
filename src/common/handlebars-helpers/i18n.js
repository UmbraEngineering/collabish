
var i18n        = require('common/i18n');
var handlebars  = require('handlebars');

handlebars.registerHelper('i18n', function(label) {
	var args = Array.prototype.slice.call(arguments, 1);
	return new handlebars.SafeString(i18n.translate(label, args));
});
