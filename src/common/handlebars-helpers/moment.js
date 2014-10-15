
var moment      = require('moment');
var handlebars  = require('handlebars');

handlebars.registerHelper('moment', function(date, format) {
	return moment(date).format(format);
});

handlebars.registerHelper('fromNow', function(date) {
	return moment(date).fromNow();
});
