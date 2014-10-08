
var $ = require('jquery');

// 
// Display a spinner in the element
// 
$.fn.spin = function(onOff, opts) {
	opts = opts || { };
	var $elem = $(this[0]);

	// Turn on the spinner
	if (onOff) {
		if (opts.replace) {
			$elem.data('spinner-content', elem.innerHTML);
			$elem.html('');
		}

		var spinner = document.createElement('div');
		spinner.className = 'progress ' + (opts.size || '') + ' ' + (opts.classname || '');
		spinner.innerHTML = '<div></div>';

		$elem.append(spinner);
	}

	// Turn off the spinner
	else {
		$elem.find('.progress').remove();

		var content = $elem.data('spinner-content');
		if (content) {
			$elem.html(content);
		}
	}
};
