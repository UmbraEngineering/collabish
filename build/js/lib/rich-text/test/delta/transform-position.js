;require._modules["/lib/rich-text/test/delta/transform-position.js"] = (function() { var __filename = "/lib/rich-text/test/delta/transform-position.js"; var __dirname = "/lib/rich-text/test/delta"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/rich-text/test/delta/transform-position.js  == */ var __module__ = function() { 
 var Delta = require('../../lib/delta');
var expect = require('chai').expect;


describe('transformPosition()', function () {
  it('insert before position', function () {
    var delta = new Delta().insert('A');
    expect(delta.transform(2)).to.equal(3);
  });

  it('insert after position', function () {
    var delta = new Delta().retain(2).insert('A');
    expect(delta.transform(1)).to.equal(1);
  });

  it('insert at position', function () {
    var delta = new Delta().retain(2).insert('A');
    expect(delta.transform(2, true)).to.equal(2);
    expect(delta.transform(2, false)).to.equal(3);
  });

  it('delete before position', function () {
    var delta = new Delta().delete(2);
    expect(delta.transform(4)).to.equal(2);
  });

  it('delete after position', function () {
    var delta = new Delta().retain(4).delete(2);
    expect(delta.transform(2)).to.equal(2);
  });

  it('delete across position', function () {
    var delta = new Delta().retain(1).delete(4);
    expect(delta.transform(2)).to.equal(1);
  });

  it('insert and delete before position', function () {
    var delta = new Delta().retain(2).insert('A').delete(2);
    expect(delta.transform(4)).to.equal(3);
  });

  it('insert before and delete across position', function () {
    var delta = new Delta().retain(2).insert('A').delete(4);
    expect(delta.transform(4)).to.equal(3);
  });

  it('delete before and delete across position', function () {
    var delta = new Delta().delete(1).retain(1).delete(4);
    expect(delta.transform(4)).to.equal(1);
  });
});
 
 }; /* ==  End source for module /lib/rich-text/test/delta/transform-position.js  == */ return module; }());;