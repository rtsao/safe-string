'use strict';

var test = require('tape');

var safeString = require('../');

test('escapes HTML characters', function(t) {
  t.equal(safeString('</script>'), '\\u003C\\u002Fscript\\u003E');
  t.end();
});
