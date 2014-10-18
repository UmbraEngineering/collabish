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

function program3(depth0,data) {
  
  
  return "'api.collabish.me'";
  }

function program5(depth0,data) {
  
  
  return "'localhost:3000'";
  }

  buffer += "<!doctype html>\n<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->\n<!--[if lt IE 7]> <html class=\"no-js lt-ie9 lt-ie8 lt-ie7\" lang=\"en\"> <![endif]-->\n<!--[if IE 7]>    <html class=\"no-js lt-ie9 lt-ie8\" lang=\"en\"> <![endif]-->\n<!--[if IE 8]>    <html class=\"no-js lt-ie9\" lang=\"en\"> <![endif]-->\n<!--[if gt IE 8]><!--> <html lang=\"en\"> <!--<![endif]-->\n<head>\n\n	<title>Collabish</title>\n\n	<meta charset=\"utf-8\" />\n	<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=0, maximum-scale=1.0\" />\n\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,700,300,400,600,800\" />\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"//";
  if (helper = helpers['static']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['static']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/css/app";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".css\" />\n\n</head>\n<body>\n\n	<div id=\"wrapper\">\n		<header></header>\n		<main></main>\n		<footer></footer>\n	</div>\n\n	<script src=\"//";
  if (helper = helpers['static']) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0['static']); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/build";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".js\"></script>\n	<script>\n		require.paths.push('/lib', '/vendor');\n		require('startup').run({\n			apiServer: ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.production), {hash:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		});\n	</script>\n\n</body>\n</html>";
  return buffer;
  });

this["exports"]["views/create-document/create-document.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<main class=\"row\">\n	<div class=\"small-12 medium-6 medium-centered columns\">\n		<h2>Create Document</h2>\n		<div class=\"error hide\"></div>\n		<form>\n			<label class=\"name\">\n				Name\n				<input type=\"text\" />\n			</label>\n			<label class=\"description\">\n				Description\n				<input type=\"text\" />\n			</label>\n			<label class=\"adult-content\">\n				Adult Content\n				<div>\n					<input type=\"checkbox\" />\n					Will this document contain adult content?\n				</div>\n			</label>\n			<label class=\"privacy\">\n				Privacy\n				<label for=\"privacy-public\" class=\"row\">\n					<div class=\"small-2 columns icon\">\n						<i class=\"fa fa-users\"></i>\n					</div>\n					<div class=\"small-10 columns\">\n						<label class=\"public\">\n							<input type=\"radio\" id=\"privacy-public\" name=\"privacy\" checked />\n							<strong>Public</strong><br />\n							Anyone can view or comment on your document (you can still mark individual\n							revisions as private).\n						</label>\n					</div>\n				</label>\n				<label for=\"privacy-private\" class=\"row\">\n					<div class=\"small-2 columns icon\">\n						<i class=\"fa fa-lock\"></i>\n					</div>\n					<div class=\"small-10 columns\">\n						<label class=\"private\">\n							<input type=\"radio\" id=\"privacy-private\" name=\"privacy\" />\n							<strong>Private</strong><br />\n							Only you and specific users you select as collaborators can view or comment\n							on your document.\n						</label>\n					</div>\n				</label>\n			</label>\n			<label class=\"tags\">\n				Tags\n				\n			</label>\n			<div class=\"button-wrapper\">\n				<button class=\"submit action button\">Create Document</button>\n			</div>\n		</form>\n	</div>\n</main>";
  return buffer;
  });

this["exports"]["views/dashboard/dashboard.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<h1>Dashboard</h1>\n<div class=\"row\">\n	<div class=\"small-12 medium-6 columns\">\n		<h2>Your Documents</h2>\n		<section class=\"documents\">\n			\n		</section>\n	</div>\n	<div class=\"small-12 medium-6 columns\">\n		<h2>Recently Starred Documents</h2>\n		<section class=\"recent\">\n			\n		</section>\n	</div>\n</div>";
  return buffer;
  });

this["exports"]["views/dashboard/no-docs.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"no-results panel\">\n	<h3>You haven't created any documents</h3>\n	<p>\n		Why not <a href=\"/#create\">create one</a>?\n	</p>\n</div>";
  });

this["exports"]["views/dashboard/no-recents.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"no-results panel\">\n	<h3>You haven't starred any documents</h3>\n	<p>\n		Why not <a href=\"/#search\">take a look around</a>?\n	</p>\n</div>";
  });

this["exports"]["views/document-overview/document-overview.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "\n	<span data-tooltip=\"This document may contain adult content\">\n		<i class=\"fa fa-eye-slash\"></i>\n	</span>\n	";
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<span data-tooltip=\"This document is shared with "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.collaborators)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " collaborators\">\n		<i class=\"fa fa-share-alt\"></i>\n	</span>\n	";
  return buffer;
  }

function program5(depth0,data) {
  
  
  return "\n	<span data-tooltip=\"This document is private\">\n		<i class=\"fa fa-lock\"></i>\n	</span>\n	";
  }

function program7(depth0,data) {
  
  
  return "\n	<span data-tooltip=\"This document is public\">\n		<i class=\"fa fa-users\"></i>\n	</span>\n	";
  }

function program9(depth0,data) {
  
  var buffer = "", helper, options;
  buffer += "\n	<a href=\"/#search?tags="
    + escapeExpression((helper = helpers.encode || (depth0 && depth0.encode),options={hash:{},data:data},helper ? helper.call(depth0, depth0, options) : helperMissing.call(depth0, "encode", depth0, options)))
    + "\">\n		<span class=\"label radius\">"
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "</span>\n	</a>\n	";
  return buffer;
  }

  buffer += "<h3>\n	<a href=\"/#document/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n</h3>\n<div class=\"icons\">\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.adultContent), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.collaborators)),stack1 == null || stack1 === false ? stack1 : stack1.length), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1['public']), {hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<p class=\"description\">\n	"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n</p>\n<div class=\"tags\">\n	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.tags), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"meta\">\n	<p class=\"updated\">\n		Last updated: "
    + escapeExpression((helper = helpers.fromNow || (depth0 && depth0.fromNow),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.updated), options) : helperMissing.call(depth0, "fromNow", ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.updated), options)))
    + "\n	</p>\n	<p class=\"stars\">\n		"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.document)),stack1 == null || stack1 === false ? stack1 : stack1.starredBy)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <i class=\"fa fa-star\"></i>\n	</p>\n</div>";
  return buffer;
  });

this["exports"]["views/footer/footer.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"copyright\">\n	Collabish &copy; "
    + escapeExpression((helper = helpers.now || (depth0 && depth0.now),options={hash:{},data:data},helper ? helper.call(depth0, "YYYY", options) : helperMissing.call(depth0, "now", "YYYY", options)))
    + " <a href=\"http://www.umbraengineering.com\">Umbra Engineering LLC</a>\n</div>\n<div class=\"links\">\n	<a class=\"terms\">Terms</a>\n	<a class=\"privacy\">Privacy</a>\n	<a class=\"report\">Report a Problem</a>\n</div>";
  return buffer;
  });

this["exports"]["views/header/header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<h1><a href=\"/#\">Collabish</a></h1>\n<div class=\"controls\">\n	<a class=\"profile\" href=\"/#user/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n		<img src=\""
    + escapeExpression((helper = helpers.gravatar || (depth0 && depth0.gravatar),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.gravatarHash), "s=32", options) : helperMissing.call(depth0, "gravatar", (depth0 && depth0.gravatarHash), "s=32", options)))
    + "\" width=\"32\" height=\"32\" alt=\"\" title=\"\" />\n		"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n	</a>\n	<div class=\"icons\">\n		<a class=\"create\" href=\"/#create\">\n			<span data-tooltip=\"Create Document\">\n				<i class=\"fa fa-plus-circle\"></i>\n			</span>\n		</a>\n		<a class=\"search\" href=\"/#search\">\n			<span data-tooltip=\"Search Documents\">\n				<i class=\"fa fa-search\"></i>\n			</span>\n		</a>\n		<a class=\"inbox\" href=\"/#inbox\">\n			<span data-tooltip=\"Inbox\">\n				<i class=\"fa fa-inbox\"></i>\n			</span>\n			<span class=\"notification\"></span>\n		</a>\n		<a class=\"settings\" href=\"/#settings\">\n			<span data-tooltip=\"Account Settings\">\n				<i class=\"fa fa-gears\"></i>\n			</span>\n		</a>\n		<a class=\"signout\">\n			<span data-tooltip=\"Sign Out\">\n				<i class=\"fa fa-sign-out\"></i>\n			</span>\n		</a>\n	</div>\n</div>\n";
  return buffer;
  });

this["exports"]["views/modal/modal.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal box ";
  if (helper = helpers.classname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.classname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n	<a class=\"modal close\">&times;</a>\n	";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["exports"]["views/modals/login/login.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h3>Login</h3>\n<div class=\"error hide\"></div>\n<form class=\"login\">\n	<label>\n		Username/Email\n		<input type=\"text\" class=\"username\" />\n	</label>\n	<label>\n		Password <small>(if needed)</small>\n		<input type=\"password\" class=\"password\" />\n	</label>\n	<div class=\"button-wrapper\">\n		<button class=\"action button\">Login</button>\n	</div>\n</form>";
  });

this["exports"]["views/modals/privacy/privacy.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h3>Privacy Policy</h3>\n<main>\n	<h4>Information We Collect</h4>\n	<ul>\n		<li>\n			<strong>Information you give us.</strong>\n			When you sign up for an account, we will ask you for some personal information, like email\n			address and phone number.\n		</li>\n\n		<li>\n			<strong>Information generated by using our services.</strong>\n			Using collabish.me automatically generates information in a number of ways which we may collect\n			for later use. This information includes the following:\n			<ul>\n				<li>\n					Analytics Information\n					<p>\n						We use <a href=\"http://analytics.google.com\">Google Analytics</a> to collect analytics\n						data about our users and the ways in which they use our services. You can see their\n						<a href=\"https://www.google.com/intl/en/policies/privacy/\">privacy policy</a> on their\n						website.\n					</p>\n				</li>\n				<li>\n					Server Logs\n					<p>\n						Our servers constantly generate log files of their activities, some of which may contain\n						your information. Specifically, we keep logs of each individual request to both our main\n						web server and our API server, and these logs may contain information such as IP addresses,\n						request bodies (which may contain personal information), search queries, and any data stored\n						in the request headers, including cookies.\n					</p>\n				</li>\n			</ul>\n		</li>\n	</ul>\n\n\n\n	<h4>How we use the information we collect</h4>\n	<p>\n		The information we collect is used to help us to provide you with better service and an overall better\n		experience. For example, the analytics information helps us to gauge interest in specific features to\n		know where we should focus our efforts. The server logs we collect help us to debug and fix problems\n		that might arise in our application.\n	</p>\n\n\n\n	<h4>Information we share</h4>\n	<p>\n		We do <strong>not</strong> share personal information with third parties unless one of the following\n		situations applies:\n	</p>\n	<ul>\n		<li>\n			<strong>We have your consent.</strong>\n			We will share information with others if you give us permission to do so.\n		</li>\n		<li>\n			<strong>Hosting and storage.</strong>\n			We have to store your data somewhere. We do not operate our own servers; We make use of the wonderful\n			hosting services at <a href=\"http://heroku.com\">Heroku</a>, and as such, all data that goes to and from\n			our app goes through their servers. You can view their <a href=\"https://www.heroku.com/policy/privacy\">\n			privacy policy</a> on their website. We also make use of <a href=\"https://www.compose.io/\">Compose</a>,\n			a database hosting service, where our app data is stored in their MongoDB servers. You can also read\n			their <a href=\"https://docs.compose.io/policies/privacy.html\">privacy policy</a> at their website.\n		</li>\n		<li>\n			<strong>External processing.</strong>\n			As we mentioned above, we make use of Google Analytics' services. This means that information about\n			page views and our users ends up on their analytics servers.\n		</li>\n		<li>\n			<strong>Legal reasons.</strong>\n			We will share personal information if we believe it is reasonably necessary to meet an applicable law\n			or enforceable government request, or to protect the rights and safety of Collabish and our users.\n		</li>\n	</ul>\n\n\n\n	<h4>Security</h4>\n	<p>\n		We use SSL encryption for both our web server and API server, protecting your information while it is\n		in transit between you and our servers. We also provide our users with several different authentication methods, including two-step verification for logins, to provide our users with extra protection against\n		attempts to gain access to their account.\n	</p>\n</main>";
  });

this["exports"]["views/modals/report/report.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h3>Report a Problem</h3>\n<div class=\"error hide\"></div>\n<p>\n	This form is so you can report a problem or bug with our application. Is something broken? Let us\n	know about it below.\n</p>\n<form>\n	<label>\n		Subject\n		<input type=\"text\" class=\"subject\" />\n	</label>\n	<label>\n		Description\n		<textarea class=\"description\"></textarea>\n	</label>\n	<div class=\"button-wrapper\">\n		<button class=\"action button\">Send Report</button>\n	</div>\n</form>";
  });

this["exports"]["views/modals/terms/terms.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h3>Terms of Service</h3>\n<main>\n	<p>\n		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo aliquam tincidunt. Vestibulum sit amet faucibus est, sit amet venenatis nunc. Curabitur non arcu non ex sollicitudin rhoncus. Proin auctor ligula et dolor euismod laoreet. Cras consequat nisi a urna tristique pellentesque. Aenean vitae semper est. In nec elit leo. Integer volutpat ligula eget tempus malesuada. Morbi tempor odio quis tellus finibus, quis pulvinar lectus mattis. Proin semper sapien eu massa pulvinar, vel consequat nisl fermentum.\n	</p>\n	<p>\n		Nulla mattis at velit vel ultrices. Sed aliquet molestie sollicitudin. Quisque placerat hendrerit ex quis dapibus. Integer metus velit, feugiat at nisl auctor, consectetur tempus ex. Suspendisse faucibus venenatis turpis, nec sodales metus feugiat posuere. Aenean ornare tellus ante, quis venenatis sem commodo nec. Phasellus faucibus rhoncus metus eu auctor. Suspendisse rhoncus tincidunt quam vitae blandit. Fusce vitae fermentum arcu. Quisque sollicitudin eros rhoncus porttitor aliquet. Integer sit amet ante urna.\n	</p>\n	<p>\n		Maecenas sit amet est porttitor, dignissim tellus pulvinar, tincidunt justo. Ut fermentum mi enim, in scelerisque mi dignissim ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum sem ex, et vestibulum purus cursus eget. Phasellus eget quam ac libero varius fermentum eget id risus. Mauris sed est elit. Quisque tempus, nunc id feugiat laoreet, mauris quam commodo quam, ac venenatis est urna et turpis.\n	</p>\n	<p>\n		Maecenas leo ipsum, maximus id vestibulum ac, viverra ac quam. In vulputate tincidunt dolor. Cras libero felis, tristique ut justo vitae, tempor cursus sem. Fusce condimentum, enim sed finibus egestas, ligula elit pharetra felis, id condimentum mauris leo vitae ante. Sed iaculis augue tellus, ac volutpat orci maximus ac. Proin magna velit, pulvinar et feugiat eu, porttitor eget velit. Aenean pretium euismod ipsum ut lacinia. Ut congue tempus nisl, nec consectetur nisl ultrices id. Etiam id metus placerat, semper mi sit amet, porttitor magna. Curabitur rutrum magna non neque porta, in porta ligula maximus. In egestas et leo vitae iaculis. Fusce mauris sem, efficitur sed ultrices a, condimentum ut ligula.\n	</p>\n	<p>\n		Integer eget ante a leo laoreet vehicula. Vestibulum ullamcorper tortor et libero tincidunt finibus. Mauris nisi erat, volutpat id egestas a, suscipit vel est. Vestibulum bibendum, risus sed malesuada congue, ligula risus imperdiet ipsum, nec iaculis nisi justo sed dui. Aenean risus neque, ultricies tempor augue sed, tincidunt interdum quam. Phasellus viverra lobortis bibendum. Quisque tristique egestas ex, nec cursus leo tristique at. Nam sollicitudin nisl luctus hendrerit aliquam. Quisque finibus semper erat id suscipit. Fusce laoreet tincidunt quam, at mollis lacus tincidunt ac. Nam lobortis enim ligula, sit amet varius ipsum gravida ac. Mauris vehicula diam augue, tincidunt sagittis ipsum mollis sed. Morbi congue odio in orci ornare, eu pellentesque mauris aliquam. Morbi vitae eleifend mi, eu condimentum lectus.\n	</p>\n	<p>\n		Aliquam sed sapien nunc. Duis egestas at nisl nec feugiat. Suspendisse cursus interdum quam sed aliquam. Nullam sodales, magna ut rutrum laoreet, magna nunc euismod dui, vel molestie lacus erat sit amet eros. Nam volutpat nunc vel mi tempus viverra. Duis maximus nibh sed est pulvinar auctor. Vivamus placerat, ipsum at porta fringilla, augue libero suscipit turpis, et consectetur tellus mauris ac felis. Integer eu vulputate augue, non posuere magna. Proin et imperdiet dui, eu pulvinar magna. Donec non pretium erat. Curabitur semper vel tortor ut tincidunt. Donec tincidunt ex eu ante varius, non commodo dui mattis.\n	</p>\n	<p>\n		Sed elementum varius lectus sed vulputate. Praesent eu porta odio, id pretium lorem. Sed semper odio facilisis, ultricies ipsum eget, tempus leo. Phasellus sit amet sagittis metus, non facilisis ipsum. Suspendisse feugiat at est eget iaculis. Morbi lacinia leo quis elit interdum, in vulputate nisl finibus. Suspendisse potenti. Suspendisse vel tellus quis massa sollicitudin rutrum.\n	</p>\n	<p>\n		Sed ac erat nulla. Donec blandit, libero vitae volutpat lobortis, sem augue venenatis sem, non vulputate est elit eget enim. Aliquam pulvinar arcu at justo fermentum, eget ornare eros tristique. Maecenas sed massa sodales, dignissim felis vel, vehicula diam. Curabitur pellentesque iaculis felis eu blandit. Nam a lacinia enim. Duis et mauris sit amet mi vulputate fermentum. Donec euismod eros quis dui dictum malesuada. In fringilla leo vitae ultrices mattis. Phasellus et suscipit enim, in posuere arcu. Suspendisse velit est, feugiat eget elit nec, bibendum viverra eros. Nam semper lectus non ipsum volutpat pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis massa vitae finibus tempor. Aliquam in viverra tellus.\n	</p>\n	<p>\n		Aenean sit amet risus sed lectus elementum volutpat eu quis erat. Vivamus lobortis nibh in diam vehicula facilisis. Sed sit amet egestas ligula. In consectetur enim in porta molestie. Curabitur condimentum sapien et eros bibendum ultricies. Nulla pulvinar tortor nec libero pretium, non posuere ex facilisis. Ut mattis volutpat odio, sed pharetra mi. Aenean pretium sit amet neque quis tristique. Aenean efficitur nec mauris in iaculis.\n	</p>\n	<p>\n		Maecenas at dapibus nulla, a malesuada nisi. Donec risus augue, imperdiet at consectetur id, posuere et dui. Nunc sit amet blandit neque. In bibendum porta orci, vel semper justo congue id. Fusce neque nibh, sollicitudin eget odio et, porttitor scelerisque augue. Praesent vitae tincidunt augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque leo quis laoreet feugiat. Duis ipsum leo, venenatis eu rutrum ac, faucibus in justo. Vestibulum pellentesque ex porttitor elit vestibulum venenatis. Integer est est, tempor ut fringilla a, malesuada vitae lacus.\n	</p>\n	<p>\n		Curabitur vel luctus ligula. In consequat felis sed egestas ultrices. Quisque vel turpis dictum, bibendum eros vitae, finibus lacus. Nulla id mollis urna. Ut tristique diam risus, et varius felis sodales vel. Duis dictum diam nibh, in dignissim tortor rhoncus in. Maecenas turpis nisl, interdum id tortor quis, sollicitudin aliquet elit. Aenean et libero non libero dapibus placerat. Aliquam lectus diam, commodo quis gravida quis, varius at libero. Nulla facilisi. Pellentesque viverra ac justo maximus ultricies. Etiam ut ligula a enim dignissim pretium.\n	</p>\n	<p>\n		Suspendisse in varius quam, hendrerit consectetur quam. Praesent sit amet justo nec ex congue cursus. Donec at dolor fringilla justo viverra blandit at sit amet diam. Vestibulum porta hendrerit metus non varius. Phasellus at porta ex, et tincidunt dui. Etiam non nulla consectetur eros ultrices ultricies sit amet in libero. Sed posuere dolor enim, at eleifend ante scelerisque varius.\n	</p>\n	<p>\n		Sed eu arcu vel leo egestas ultricies at vitae est. Suspendisse lobortis massa sagittis commodo tempus. Aenean commodo iaculis commodo. Maecenas lectus nunc, ornare id convallis auctor, semper ut sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc eleifend ac nisl id egestas. Nullam ut sem a sem aliquam dapibus et nec lectus.\n	</p>\n	<p>\n		Suspendisse potenti. Morbi auctor tristique metus sed placerat. Nulla quis justo condimentum sem viverra fringilla. Pellentesque interdum aliquam justo, quis scelerisque lacus lobortis eu. Sed ligula metus, dignissim nec diam in, gravida blandit ex. Quisque scelerisque ligula sed neque mollis pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas dapibus lobortis elementum. Donec laoreet tellus quis elementum blandit. Suspendisse nulla massa, mollis in quam vel, iaculis ullamcorper leo. Curabitur convallis, lectus sed porttitor convallis, nisi libero semper mauris, ut egestas orci lorem eu nunc. Nulla maximus lorem sed est consequat, rutrum luctus mauris hendrerit. Sed aliquet tempus velit at imperdiet. Suspendisse eget tortor rutrum, viverra leo nec, bibendum eros.\n	</p>\n	<p>\n		Vivamus hendrerit non arcu sit amet varius. Donec eget erat ex. Ut ut nibh interdum, imperdiet nunc in, eleifend ex. Mauris vitae hendrerit dolor, vel volutpat massa. Integer at lobortis eros, et dictum nibh. Cras et vehicula lacus. Phasellus sed consequat est, ut faucibus quam. Donec nec lacus commodo leo gravida tempor. Phasellus vel risus sem. Pellentesque venenatis, eros vel ultrices sollicitudin, magna velit condimentum libero, sed aliquam dui lacus a mauris. Cras vitae molestie sem, vitae finibus quam.\n	</p>\n</main>";
  });

this["exports"]["views/notfound/notfound.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n	<a href=\"/#dashboard\">Dashboard</a>\n	<a href=\"/#search\">Document Search</a>\n	";
  }

function program3(depth0,data) {
  
  
  return "\n	<a href=\"/#\">Home</a>\n	<a href=\"/#signup\">Signup</a>\n	";
  }

  buffer += "<header>\n	<h1><a href=\"/#\">Collabish</a></h1>\n</header>\n\n<main>\n	<h2>Not Found</h2>\n	<p>\n		You broke it. It's all your fault. The website is dead.\n	</p>\n</main>\n\n<nav>\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.loggedIn), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</nav>\n";
  return buffer;
  });

this["exports"]["views/profile/notfound.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h3>Not Found</h3>\n<p>\n	We couldn't find the profile you were looking for.\n</p>";
  });

this["exports"]["views/profile/profile.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"row\">\n	<h1>Profile: ";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h1>\n</div>\n<main class=\"row\">\n	\n</main>";
  return buffer;
  });

this["exports"]["views/profile/user.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<div class=\"small-12 medium-3 columns basic\">\n	<div class=\"panel\">\n		<img src=\""
    + escapeExpression((helper = helpers.gravatar || (depth0 && depth0.gravatar),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.gravatarHash), "s=250", options) : helperMissing.call(depth0, "gravatar", (depth0 && depth0.gravatarHash), "s=250", options)))
    + "\" width=\"250\" height=\"250\" alt=\"\" title=\"\" />\n		<dl class=\"profile-info\">\n			<dt>Name</dt>\n			<dd>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</dd>\n\n			<dt>URL</dt>\n			<dd><a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),stack1 == null || stack1 === false ? stack1 : stack1.url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></dd>\n\n			<dt>Location</dt>\n			<dd>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.user)),stack1 == null || stack1 === false ? stack1 : stack1.profile)),stack1 == null || stack1 === false ? stack1 : stack1.location)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</dd>\n		</dl>\n	</div>\n</div>\n<div class=\"small-12 medium-9 columns documents\">\n	\n</div>";
  return buffer;
  });

this["exports"]["views/quill/quill.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.buttons), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	";
  return buffer;
  }

  buffer += "<div class=\"toolbar\">\n	<select class=\"ql-font\">\n		<option value=\"sans-serif\" selected>Sans Serif</option>\n		<option value=\"serif\">Serif</option>\n		<option value=\"monospace\">Monospace</option>\n	</select>\n	<a class=\"ql-bold\" data-tooltip=\"Bold (Ctrl+B)\">\n		<i class=\"fa fa-bold\"></i>\n	</a>\n	<a class=\"ql-italic\" data-tooltip=\"Italic (Ctrl+I)\">\n		<i class=\"fa fa-italic\"></i>\n	</a>\n	<a class=\"ql-underline\" data-tooltip=\"Underline (Ctrl+U)\">\n		<i class=\"fa fa-underline\"></i>\n	</a>\n	<a class=\"ql-strike\" data-tooltip=\"Strikethrough\">\n		<i class=\"fa fa-strikethrough\"></i>\n	</a>\n	";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.buttons), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n<div class=\"editor\">\n	<div><br /></div>\n</div>";
  return buffer;
  });

this["exports"]["views/search/search.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<h1>Search</h1>\n<div class=\"row\">\n	<div class=\"panel\">\n		<form>\n			<label class=\"query\">\n				<input type=\"text\" />\n			</label>\n			\n			<hr />\n			\n			<label class=\"tags\">\n				Tags\n				\n			</label>\n			<label class=\"tags-type\">\n				Tagging Type\n				<div>\n					<input type=\"radio\" name=\"tags-type\" value=\"any\" checked /> Any\n					<input type=\"radio\" name=\"tags-type\" value=\"all\" /> All\n				</div>\n			</label>\n\n			<hr />\n\n			<label class=\"adult-content\">\n				Adult Content\n				<div>\n					<input type=\"radio\" name=\"adult-content\" value=\"yes\" /> Yes\n					<input type=\"radio\" name=\"adult-content\" value=\"no\" checked /> No\n					<input type=\"radio\" name=\"adult-content\" value=\"either\" /> Either\n				</div>\n			</label>\n\n			<hr />\n\n			<div class=\"row dates\">\n				<div class=\"small-12 medium-6 columns\">\n					<label class=\"created\">\n						Create\n						<select>\n							<option value=\"any\" selected>Any Time</option>\n							<option value=\"today\">Today</option>\n							<option value=\"week\">Past Week</option>\n							<option value=\"month\">Past Month</option>\n						</select>\n					</label>\n				</div>\n				<div class=\"small-12 medium-6 columns\">\n					<label class=\"updated\">\n						Updated\n						<select>\n							<option value=\"any\" selected>Any Time</option>\n							<option value=\"today\">Today</option>\n							<option value=\"week\">Past Week</option>\n							<option value=\"month\">Past Month</option>\n						</select>\n					</label>\n				</div>\n			</div>\n\n			<hr />\n\n			<div class=\"button-wrapper\">\n				<button class=\"expand action button\"><i class=\"fa fa-search\"></i> Search</button>\n			</div>\n		</form>\n	</div>\n</div>";
  return buffer;
  });

this["exports"]["views/settings/account/account.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>Account Settings</h2>\n<p class=\"radius warning panel\">\n	These actions can be potentially dangerous as using them poorly can lead to loss of data or losing access\n	to your account. Please use them with caution (or not at all, that works too...)\n</p>\n<form>\n	<label>\n		Username\n		<input type=\"text\" class=\"username\" value=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n	</label>\n	<button class=\"action button update-username\">Update Username</button>\n</form>\n\n<hr />\n\n<form>\n	<label>\n		Email Address\n		<input type=\"email\" class=\"email\" value=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n	</label>\n	<button class=\"action button update-email\">Confirm New Email</button>\n</form>\n\n<hr />\n\n<label class=\"delete\">\n	Delete Account\n	<p class=\"radius warning panel\">\n		This action is <strong>not</strong> reversable or recoverable; Your data will be lost forever.\n		Please make sure you mean it, as no amount of complaining or begging will bring your data back...\n	</p>\n	<button class=\"alert button delete-account\">Delete Account</button>\n</label>\n";
  return buffer;
  });

this["exports"]["views/settings/authentication/authentication.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "selected";
  }

function program3(depth0,data) {
  
  
  return "\n	<label class=\"current-password\">\n		Current Password<br />\n		<input type=\"password\" />\n	</label>\n	";
  }

  buffer += "<h2>Authentication</h2>\n<form>\n	<label>\n		Authentication Method\n		<select class=\"auth-method\">\n			<option value=\"password\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.authMethod)),stack1 == null || stack1 === false ? stack1 : stack1.isPassword), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Password</option>\n			<option value=\"email\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.authMethod)),stack1 == null || stack1 === false ? stack1 : stack1.isEmail), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Email only</option>\n			<option value=\"twostep-email\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.authMethod)),stack1 == null || stack1 === false ? stack1 : stack1.isTwostepEmail), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Two-step (Password + Email)</option>\n			\n		</select>\n	</label>\n	";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 && depth0.authMethod)),stack1 == null || stack1 === false ? stack1 : stack1.isEmail), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<label class=\"new-password\">\n		New Password<br />\n		<input type=\"password\" />\n		<input type=\"password\" />\n	</label>\n	<div class=\"button-wrapper\">\n		<button class=\"action button\">Update Authentication Method</button>\n	</div>\n</form>";
  return buffer;
  });

this["exports"]["views/settings/profile/profile.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<h2>Public Profile</h2>\n<form>\n	<label class=\"gravatar\">\n		Avatar (provided by <a href=\"http://gravatar.com\">Gravatar</a>)\n		<img src=\""
    + escapeExpression((helper = helpers.gravatar || (depth0 && depth0.gravatar),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.gravatarHash), "s=100", options) : helperMissing.call(depth0, "gravatar", (depth0 && depth0.gravatarHash), "s=100", options)))
    + "\" width=\"100\" height=\"100\" alt=\"\" title=\"\" />\n	</label>\n	<label>\n		Name<br />\n		<input type=\"text\" class=\"name\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n		<i class=\"fa\"></i>\n	</label>\n	<label>\n		URL<br />\n		<input type=\"text\" class=\"url\" value=\"";
  if (helper = helpers.url) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.url); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n		<i class=\"fa\"></i>\n	</label>\n	<label>\n		Location<br />\n		<input type=\"text\" class=\"location\" value=\"";
  if (helper = helpers.location) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.location); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n		<i class=\"fa\"></i>\n	</label>\n</form>";
  return buffer;
  });

this["exports"]["views/settings/settings.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<h1>Settings</h1>\n<div class=\"row\">\n	<div class=\"small-12 medium-3 columns\">\n		<nav>\n			<div class=\"stack button-group\">\n				<a class=\"button secondary expand\" href=\"/#settings/profile\">Public Profile</a>\n				<a class=\"button secondary expand\" href=\"/#settings/authentication\">Authentication</a>\n				<a class=\"button secondary expand\" href=\"/#settings/notification\">Notifications</a>\n				<a class=\"button secondary expand\" href=\"/#settings/account\">Account</a>\n			</div>\n		</nav>\n	</div>\n	<div class=\"small-12 medium-9 columns\">\n		<main class=\"panel\">\n			\n		</main>\n	</div>\n</div>";
  return buffer;
  });

this["exports"]["views/tag-editor/tag-editor.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<span class=\"tags\"></span>\n<input type=\"text\" />";
  });

this["exports"]["views/welcome/auth/email-confirmation/email-confirmation.error.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Uh-oh!</h2>\n<p>\n	We could not successfully confirm your email address. This could be caused by a number of\n	things such as an expired confirmation token or a server error.\n</p>\n";
  });

this["exports"]["views/welcome/auth/email-confirmation/email-confirmation.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<header>\n	<h1><a href=\"/#\">Collabish</a></h1>\n</header>\n\n<main>\n	<p class=\"confirming\">\n		Confirming your email address ...\n	</p>\n</main>\n\n<nav class=\"welcome\">\n	\n</nav>";
  return buffer;
  });

this["exports"]["views/welcome/auth/email-confirmation/email-confirmation.success.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h2>Success!</h2>\n<p>\n	Your email address has been successfully confirmed. You can now <a class=\"login\">login</a> to your\n	account.\n</p>\n";
  });

this["exports"]["views/welcome/auth/twostep/twostep.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<header>\n	<h1><a href=\"/#\">Collabish</a></h1>\n</header>\n\n<main>\n	<p>\n		Your two-step confirmation token has been sent. Go check for your message, and enter your\n		code below.\n	</p>\n	<form>\n		<div class=\"error hide\"></div>\n		<label>\n			Confirmation Code\n			<input type=\"text\" class=\"code\" placeholder=\"eg. ABC123\" />\n		</label>\n		<div class=\"button-wrapper\">\n			<button class=\"button\">Confirm Login</button>\n		</div>\n	</form>\n</main>";
  });

this["exports"]["views/welcome/nav/nav.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a class=\"login button\">Login</a>\n<a class=\"terms\">Terms</a>\n<a class=\"privacy\">Privacy</a>";
  });

this["exports"]["views/welcome/signup/signup.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n	<h1><a href=\"/#\">Collabish</a></h1>\n</header>\n\n<main class=\"row\">\n	<div class=\"small-12 medium-4 medium-centered columns\">\n		<h2>Signup</h2>\n		<div class=\"error hide\"></div>\n		<form>\n			<label class=\"username\">\n				Username\n				<input type=\"text\" value=\"";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n			</label>\n			<label class=\"email\">\n				Email\n				<input type=\"email\" value=\"";
  if (helper = helpers.email) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.email); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n			</label>\n			<label class=\"auth-method\" aria-describedby=\"auth-method-tooltip\">\n				Auth Method\n				<span id=\"auth-method-tooltip\" data-tooltip=\"Determines how you log in to Collabish\">?</span>\n				<select>\n					<option value=\"password\">Password</option>\n					<option value=\"email\">Email</option>\n					<option value=\"twostep-email\">Two-Step (Password + Email)</option>\n					\n				</select>\n			</label>\n			<label class=\"password\">\n				Password (twice)\n				<input type=\"password\" />\n				<input type=\"password\" />\n			</label>\n			<label class=\"mobile\" aria-describedby=\"mobile-tooltip\">\n				Mobile Phone\n				<span id=\"mobile-tooltip\" data-tooltip=\"We will only ever text you to send you login codes\">?</span>\n				<div class=\"row collapse\">\n					<div class=\"small-1 columns\">\n						<span class=\"prefix\">+1</span>\n					</div>\n					<div class=\"small-11 columns\">\n						<input type=\"tel\" />\n					</div>\n				</div>\n			</label>\n			<div class=\"button-wrapper\">\n				<button class=\"action button\">Sign Up</button>\n			</div>\n		</form>\n	</div>\n</main>\n\n<nav class=\"welcome\">\n	\n</nav>\n";
  return buffer;
  });

this["exports"]["views/welcome/signup/signup.success.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h2>You're almost done...</h2>\n<p>\n	Welcome ";
  if (helper = helpers.username) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.username); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "!<br />\n	We've sent you a confirmation email, and once you click the link in\n	that email, your account will be ready. That link will take you back\n	to the login screen, so you can close this tab now.\n</p>";
  return buffer;
  });

this["exports"]["views/welcome/welcome.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<header>\n	<h1>Collabish</h1>\n	<p>\n		A collaborative environment for writers to work, share, comment, and rework\n	</p>\n</header>\n\n<nav class=\"welcome\">\n	\n</nav>\n\n<main class=\"row\">\n	<div class=\"small-12 medium-8 columns\">\n		\n	</div>\n	<div class=\"small-12 medium-4 columns signup\">\n		<h2>Join The Community</h2>\n		<form>\n			<label class=\"username\">\n				Username <span></span>\n				<input type=\"text\" />\n			</label>\n			<label class=\"email\">\n				Email <span></span>\n				<input type=\"text\" />\n			</label>\n			<div class=\"button-wrapper\">\n				<button class=\"action button\">Sign Up</button>\n			</div>\n		</form>\n	</div>\n</main>\n";
  return buffer;
  });

if (typeof exports === 'object' && exports) {module.exports = this["exports"];} 
 }; /* ==  End source for module /templates.js  == */ return module; }());;