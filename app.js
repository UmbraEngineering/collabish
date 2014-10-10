
var express         = require('express');
var conf            = require('./server/conf');
var methodOverride  = require('method-override');

var app = module.exports = express();

app.use(express.compress());
// app.use(express.bodyParser({ strict: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(function() {
	var staticServer = express.static(conf.static.path, {
		maxAge: conf.static.ttl
	});

	return function(req, res, next) {
		if (req.header('host') !== conf.static.host) {
			return next();
		}

		staticServer(req, res, next);
	};
}());
app.use(app.router);

require('./server/endpoints');

var server = app.listen(conf.http.port, conf.http.hostname, function() {
	console.log('Express server listening on %s:%s', conf.http.hostname, conf.http.port + '...');
});
