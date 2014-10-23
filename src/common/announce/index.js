
var $  = require('jquery');

var $body     = $('body');
var duration  = 10000;

exports.show = function(type, message) {
	if (arguments.length === 1) {
		message = type; type = 'info';
	}

	var $node = $(
		'<div class="announcement">' +
			'<p class="alert-box radius ' + type + '">' + message + '<a class="close">&times;</a></p>' +
		'</div>'
	);

	$node.appendTo($body);
	$node.find('.close').click(function() {
		timeouts.forEach(function(timeout) {
			clearTimeout(timeout);
		});
		hide();
	});

	var timeouts = [ ];

	timeouts.push(
		setTimeout(function() {
			$node.addClass('show');
		}, 13)
	);

	timeouts.push(
		setTimeout(hide, duration)
	);

	function hide() {
		$node.removeClass('show');
		setTimeout(function() {
			$node.remove();
		}, 500);
	}
};
