'use strict';

/**
 * Source code adapted from (BSD Licensed):
 * https://github.com/yahoo/serialize-javascript
 * Copyright 2014 Yahoo! Inc.
 * All rights reserved.
 */

var UNSAFE_CHARS_PATTERN = /[<>\/\u2028\u2029]/g;

// Mapping of unsafe HTML and invalid JavaScript line terminator chars to
// their Unicode counterparts which are safe to use in JavaScript strings.
var UNICODE_CHARS = {
  '<'     : '\\u003C',
  '>'     : '\\u003E',
  '/'     : '\\u002F',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029'
};

function replaceUnsafe(char) {
  return UNICODE_CHARS[char];
}

function safeString(str) {
  return str.replace(UNSAFE_CHARS_PATTERN, replaceUnsafe);
}

module.exports = safeString;
