
module.exports = {

	http: {
		hostname: '0.0.0.0',
		port: process.env.NODE_ENV
	},

	static: {
		ttl: 86400000,
		host: 'static.collabish.me'
	}

};
