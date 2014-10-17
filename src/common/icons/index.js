
var $ = require('jquery');

$.fn.icon = function(icon, opts) {
	var $icon = this;

	opts = opts || { };

	if (! icon) {
		$icon.animate({ opacity: 0 }, 500, function() {
			$icon[0].className = '';
			$icon.css({
				opacity: 1
			});
		});
		return this;
	}

	$icon[0].className = 'fa fa-' + icon + (opts.spin ? ' fa-spin' : '');
	
	if (opts.color) {
		$icon.css('color', opts.color);
	}

	return this;
};
