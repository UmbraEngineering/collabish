
// 
// Modify the View::render function to consider strings in template
// properties to be a template path to be resolved
// 

var templates  = require('templates');
var View       = require('cloak/view');

var render = View.prototype.render;

View.prototype.render = function(data, templateProperty) {
	templateProperty = templateProperty || 'template';

	if (typeof this[templateProperty] === 'string') {
		this[templateProperty] = templates[this[templateProperty]];
	}

	return render.apply(this, arguments);
};
