
var handlebars  = require('handlebars');

handlebars.registerHelper('icon', function(icon) {
	return new handlebars.SafeString('<i class="fa fa-' + icon + '"></i>');
});
