;require._modules["/lib/rich-text/test/delta/diff.js"] = (function() { var __filename = "/lib/rich-text/test/delta/diff.js"; var __dirname = "/lib/rich-text/test/delta"; var module = { loaded: false, exports: { }, filename: __filename, dirname: __dirname, require: null, call: function() { module.loaded = true; module.call = function() { }; __module__(); }, parent: null, children: [ ] }; var process = { title: "browser", nextTick: function(func) { setTimeout(func, 0); } }; var require = module.require = window.require._bind(module); var exports = module.exports; 
 /* ==  Begin source for module /lib/rich-text/test/delta/diff.js  == */ var __module__ = function() { 
 var Delta = require('../../lib/delta');
var expect = require('chai').expect;


describe('diff()', function () {
  it('insert', function () {
    var a = new Delta().insert('A');
    var b = new Delta().insert('AB');
    var expected = new Delta().retain(1).insert('B');
    expect(a.diff(b)).to.deep.equal(expected);
  });

  it('delete', function () {
    var a = new Delta().insert('AB');
    var b = new Delta().insert('A');
    var expected = new Delta().retain(1).delete(1);
    expect(a.diff(b)).to.deep.equal(expected);
  });

  it('retain', function () {
    var a = new Delta().insert('A');
    var b = new Delta().insert('A');
    var expected = new Delta();
    expect(a.diff(b)).to.deep.equal(expected);
  });

  it('format', function () {
    var a = new Delta().insert('A');
    var b = new Delta().insert('A', { bold: true });
    var expected = new Delta().retain(1, { bold: true });
    expect(a.diff(b)).to.deep.equal(expected);
  });

  it('embed match', function () {
    var a = new Delta().insert(1);
    var b = new Delta().insert(1);
    var expected = new Delta();
    expect(a.diff(b)).to.deep.equal(expected);
  });

  it('embed false positive', function () {
    var a = new Delta().insert(1);
    var b = new Delta().insert(String.fromCharCode(0)); // Placeholder char for embed in diff()
    var expected = new Delta().insert(String.fromCharCode(0)).delete(1);
    expect(a.diff(b)).to.deep.equal(expected);
  });

  it('error on non-documents', function () {
    var a = new Delta().insert('A');
    var b = new Delta().retain(1).insert('B');
    expect(function () {
      a.diff(b);
    }).to.throw(Error);
    expect(function () {
      b.diff(a);
    }).to.throw(Error);
  });

  it('inconvenient indexes', function () {
    var a = new Delta().insert('12', { bold: true }).insert('34', { italic: true });
    var b = new Delta().insert('123', { color: 'red' });
    var expected = new Delta().retain(2, { bold: null, color: 'red' }).retain(1, { italic: null, color: 'red' }).delete(1);
    expect(a.diff(b)).to.deep.equal(expected);
  });

  it('combination', function () {
    var a = new Delta().insert('Bad', { color: 'red' }).insert('cat', { color: 'blue' });
    var b = new Delta().insert('Good', { bold: true }).insert('dog', { italic: true });
    var expected = new Delta().insert('Good', { bold: true }).delete(2).retain(1, { italic: true, color: null }).delete(3).insert('og', { italic: true });
    expect(a.diff(b)).to.deep.equal(expected);
  });
});
 
 }; /* ==  End source for module /lib/rich-text/test/delta/diff.js  == */ return module; }());;