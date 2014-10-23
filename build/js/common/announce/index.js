;require._modules["/common/announce/index.js"] = (function() { var __filename = "/common/announce/index.js"; var __dirname = "/common/announce"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /common/announce/index.js  == */ var __module__ = function() { 
 
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
 
 }; /* ==  End source for module /common/announce/index.js  == */ return module; }());;