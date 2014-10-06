
var fs          = require('fs');
var handlebars  = require('handlebars');

var raw       = { };
var compiled  = { };

exports.render = function(template, data) {
	return getCompiled(template)(data);
};

function loadFile(template) {
	if (! raw[template]) {
		raw[template] = fs.readFileSync(__dirname + '/../' + template, 'utf8');
	}

	return raw[template];
}

function getCompiled(template) {
	if (! compiled[template]) {
		var content = loadFile(template);
		compiled[template] = handlebars.compile(content);
	}

	return compiled[template];
}
