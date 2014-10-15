
var handlebars = require('handlebars');

handlebars.registerHelper('encode', function(str) {
	return encodeURIComponent(str);
});
