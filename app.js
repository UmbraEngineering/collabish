
var express         = require('express');
var conf            = require('./server/conf');
var methodOverride  = require('method-override');

var app = module.exports = express();

app.use(express.compress());
// app.use(express.bodyParser({ strict: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(function() {
	var staticServer = express.static(conf.static.path, {
		maxAge: conf.static.ttl,
		setHeaders: function(res, path) {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET');
		}
	});

	return function(req, res, next) {
		console.log(req.header('host'), conf.static.host);
		if (req.header('host') !== conf.static.host) {
			return next();
		}
		console.log(req.url);

		staticServer(req, res, function() {
			res.contentType('text/plain');
			res.send(404, 'Not Found')
		});
	};
}());
app.use(app.router);

require('./server/endpoints');

var server = app.listen(conf.http.port, conf.http.hostname, function() {
	console.log('Express server listening on %s:%s', conf.http.hostname, conf.http.port + '...');
});
