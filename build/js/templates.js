;require._modules["/templates.js"] = (function() { var __filename = "/templates.js"; var __dirname = "/"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /templates.js  == */ var __module__ = function() { 
 var glob = ('undefined' === typeof window) ? global : window,

Handlebars = glob.Handlebars || require('handlebars');

this["exports"] = this["exports"] || {};

this["exports"]["index.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return ".min";
  }

  buffer += "<!doctype html>\n<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->\n<!--[if lt IE 7]> <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 7]>    <html class=\"no-js lt-ie9 lt-ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 8]>    <html class=\"no-js lt-ie9\" lang=\"en\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html lang=\"en\"> <!--<![endif]-->\n<head>\n\n	<title>Collabish</title>\n\n	<meta charset=\"utf-8\" />\n	<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0\" />\n\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,700,300,400,600,800\" />\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"//";
  if (helper = helpers['static']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['static']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/css/app";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".css\" />\n\n</head>\n<body>\n\n	<div id=\"wrapper\"></div>\n\n	<script src=\"//";
  if (helper = helpers['static']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['static']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/build";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".js\"></script>\n\n	<script>\n\n		window.History = {options: {html4Mode: true}};\n\n		// Add the /lib directory to the require path\n		require.paths.push('/lib', '/vendor');\n\n		// Polyfill JSON if needed\n		JSON || require('json2');\n\n		// Load in any cloak mods\n		require('mods/templates');\n\n		// Tell the router to start listening...\n		var MainRouter = require('routers/main');\n		\n		var router = new MainRouter({ autoStart: false })\n			.use(require('routers/welcome'))\n			.start();\n\n	</script>\n\n</body>\n</html>";
  return buffer;
  });

this["exports"]["views/welcome/welcome.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<header>\n	<h1>Collabish</h1>\n	<p>\n		A collaborative environment for writers to work, share, comment, and rework\n	</p>\n</header>\n\n<nav>\n	<a class=\"login button\">Login</a>\n	<a class=\"terms\">Terms</a>\n	<a class=\"privacy\">Privacy</a>\n</nav>\n\n<main class=\"row\">\n	<div class=\"small-12 medium-8 columns\">\n		\n	</div>\n	<div class=\"small-12 medium-4 columns signup\">\n		<h2>Join The Community</h2>\n		<form>\n			<label>\n				Username\n				<input type=\"text\" class=\"username\" />\n			</label>\n			<label>\n				Email\n				<input type=\"text\" class=\"email\" />\n			</label>\n			<div class=\"button-wrapper\">\n				<a class=\"button\">Sign Up</a>\n			</div>\n		</form>\n	</div>\n</main>\n";
  return buffer;
  });

if (typeof exports === 'object' && exports) {module.exports = this["exports"];} 
 }; /* ==  End source for module /templates.js  == */ return module; }());;