
var handlebars = require('handlebars');

handlebars.registerHelper('gravatar', function(hash, params) {
	params = params || '';

	// Default to identicons
	if (params.indexOf('d=') < 0) {
		params += (params.length ? '?' : '&') + 'd=identicon';
	}

	// Default to a rating of R or below
	if (params.indexOf('r=') < 0) {
		params += (params.length ? '?' : '&') + 'r=r';
	}

	return location.protocol + '//www.gravatar.com/avatar/' + hash + (params ? '?' + params : '');
});
