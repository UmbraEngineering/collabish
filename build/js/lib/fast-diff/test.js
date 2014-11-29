;require._modules["/lib/fast-diff/test.js"] = (function() { var __filename = "/lib/fast-diff/test.js"; var __dirname = "/lib/fast-diff"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/fast-diff/test.js  == */ var __module__ = function() { 
 var _ = require('lodash');
var googlediff = require('googlediff');
var seedrandom = require('seedrandom');
var diff = require('./diff.js');

googlediff = new googlediff();

var ITERATIONS = 10000;
var ALPHABET = 'GATTACA';
var LENGTH = 100;

var seed = Math.floor(Math.random() * 10000);
var random = seedrandom(seed);

console.log('Running computing ' + ITERATIONS + ' diffs with seed ' + seed + '...');

console.log('Generating strings...');
var strings = [];
for(var i = 0; i <= ITERATIONS; ++i) {
  var chars = [];
  for(var l = 0; l < LENGTH; ++l) {
    var letter = ALPHABET.substr(Math.floor(random() * ALPHABET.length), 1);
    chars.push(letter);
  }
  strings.push(chars.join(''));
}

console.log('Running tests...');
for(var i = 0; i < ITERATIONS; ++i) {
  var result = diff(strings[i], strings[i+1]);
  var expected = googlediff.diff_main(strings[i], strings[i+1]);
  if (!_.isEqual(result, expected)) {
    console.log('Expected', expected);
    console.log('Result', result);
    throw new Error('Diff produced difference results.');
  }
}

console.log("Success!");
 
 }; /* ==  End source for module /lib/fast-diff/test.js  == */ return module; }());;