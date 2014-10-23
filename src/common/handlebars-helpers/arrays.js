
var handlebars = require('handlebars');

handlebars.registerHelper('eachReverse', function(arr, opts) {
	var body = '';
	for (var i = arr.length - 1; i >= 0; i--) {
		body += opts.fn(arr[i]);
	}
	return body;
});
