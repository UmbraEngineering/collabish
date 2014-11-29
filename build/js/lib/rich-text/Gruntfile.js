;require._modules["/lib/rich-text/Gruntfile.js"] = (function() { var __filename = "/lib/rich-text/Gruntfile.js"; var __dirname = "/lib/rich-text"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/rich-text/Gruntfile.js  == */ var __module__ = function() { 
 var fs = require('fs');

module.exports = function (grunt) {
  // Define to control testing order
  var tests = [
    'test/is.js',
    'test/attributes.js',
    'test/op.js',
    'test/delta/builder.js',
    'test/delta/helpers.js',
    'test/delta/compose.js',
    'test/delta/transform.js',
    'test/delta/transform-position.js',
    'test/delta/diff.js'
  ];

  grunt.registerTask('coverage', function () {
    grunt.util.spawn({
      cmd: './node_modules/.bin/istanbul',
      args: ['cover', './node_modules/.bin/_mocha'].concat(tests).concat(['--dir', '.coverage']),
      opts: { stdio: 'inherit' }
    }, this.async());
  });

  grunt.registerTask('coverage:fuzzer', function () {
    grunt.util.spawn({
      cmd: './node_modules/.bin/istanbul',
      args: ['cover', './node_modules/.bin/_mocha', 'test/fuzzer.js', '--dir', '.coverage'],
      opts: { stdio: 'inherit' }
    }, this.async());
  });

  grunt.registerTask('coverage:report', function () {
    var file = fs.createReadStream('.coverage/lcov.info');
    var child = grunt.util.spawn({
      cmd: './node_modules/coveralls/bin/coveralls.js',
    }, this.async());
    file.pipe(child.stdin);
  });

  grunt.registerTask('test', function () {
    grunt.util.spawn({
      cmd: './node_modules/.bin/mocha',
      args: tests.concat(['test/fuzzer.js']),
      opts: { stdio: 'inherit' }
    }, this.async());
  });

  grunt.registerTask('test:unit', function () {
    grunt.util.spawn({
      cmd: './node_modules/.bin/mocha',
      args: tests,
      opts: { stdio: 'inherit' }
    }, this.async());
  });

  grunt.registerTask('test:fuzzer', function () {
    grunt.util.spawn({
      cmd: './node_modules/.bin/mocha',
      args: ['test/fuzzer.js'],
      opts: { stdio: 'inherit' }
    }, this.async());
  });
};
 
 }; /* ==  End source for module /lib/rich-text/Gruntfile.js  == */ return module; }());;