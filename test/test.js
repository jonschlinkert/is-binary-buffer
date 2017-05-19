'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var isBinary = require('..');
var fixture = path.join.bind(path, __dirname, 'fixtures');

describe('is-binary-buffer', function() {
  it('should export a function', function() {
    assert.equal(typeof isBinary, 'function');
  });

  it('should be false if value is undefined', function() {
    assert.equal(isBinary(), false);
  });

  it('should be false if value is a string', function() {
    assert.equal(isBinary('foo'), false);
  });

  it('should be false if value is a utf8 buffer', function() {
    assert.equal(isBinary(fs.readFileSync(fixture('foo.txt'))), false);
    assert.equal(isBinary(fs.readFileSync(fixture('bar.txt'))), false);
  });

  it('should be true if value is a binary buffer', function() {
    assert.equal(isBinary(fs.readFileSync(fixture('image.bmp'))), true);
    assert.equal(isBinary(fs.readFileSync(fixture('image.gif'))), true);
    assert.equal(isBinary(fs.readFileSync(fixture('image.jpg'))), true);
    assert.equal(isBinary(fs.readFileSync(fixture('image.png'))), true);
    assert.equal(isBinary(fs.readFileSync(fixture('image.psd'))), true);
    assert.equal(isBinary(fs.readFileSync(fixture('image.tif'))), true);
  });
});
