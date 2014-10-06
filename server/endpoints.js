
var app        = require('../app');
var conf       = require('./conf');
var templates  = require('./templates');

app.use(function sendApp(req, res) {
	res.send(200,
		templates.render('src/index.hbs', {
			static: conf.static.host,
			production: (process.env.NODE_ENV === 'production')
		})
	);
});

