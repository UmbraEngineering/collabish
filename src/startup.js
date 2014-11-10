
exports.run = function(opts) {
	// History.js config
	window.History = {options: {html4Mode: true}};

	// Polyfill JSON if needed
	if (! ('JSON' in window)) {
		require('json2');
	}
	
	// Polyfill Promise if needed
	if (! ('Promise' in window)) {
		require('promise').install();
	}

	// Google Analytics
	googleAnalytics();

	// Socket.io config
	socketio(opts.apiServer);

	// Use <section> tags for views
	require('cloak').config.viewTag = 'section';

	// Load the template compiler
	require('common/templates');

	// Load the handlebars helpers
	require('common/handlebars-helpers');

	// Load jquery plugins
	require('jquery.hotkeys');
	require('jquery.atwho');
	require('common/spin');
	require('common/icons');
	require('common/disable');

	// Load the delta -> html renderer
	require('quilljs-renderer').loadFormat('html');

	// Load in the auth module and router
	var auth = require('common/auth');
	var MainRouter = require('routers/main');

	// Check for a logged in user before loading up the router
	auth.check().then(function() {
		window.router = new MainRouter({ autoStart: false })
			.use(require('routers/welcome'))
			.use(require('routers/dashboard'))
			.use(require('routers/settings'))
			.use(require('routers/document'))
			.start();
	})
	.catch(function(err) {
		console.error(err.stack || err);
	});
};

// 
// Load and setup google analytics
// 
function googleAnalytics() {
	/* jshint ignore:start */
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	/* jshint ignore:end */

	ga('create', 'UA-55524086-1', 'auto');
	if (! require('history').enabled) {
		ga('send', 'pageview');
	}
}

// 
// Set up socket.io communication with the api server
// 
function socketio(api) {
	var io = require('socket.io');
	var config = require('cloak').config;
	var socketUrl = location.protocol + '//' + api;

	config.socket = io.connect(socketUrl);
	config.modelStore = require('cloak/model-stores/dagger');
}
