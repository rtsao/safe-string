'use strict';

var test = require('tape');

var safeString = require('../');

test('escapes HTML characters', function(t) {
  t.equal(safeString('</script>'), '\\u003C\\u002Fscript\\u003E');
  t.end();
});

test('escapes line terminators', function(t) {
  t.equal(safeString('\u2028\u2029'), '\\u2028\\u2029');
  t.end();
});
