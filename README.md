# safe-string

[![build status][build-badge]][build-href]
[![dependencies status][deps-badge]][deps-href]
[![npm version][npm-badge]][npm-href]

Escapes HTML characters and JavaScript line terminators

Adapted from [`serialize-javascript`](https://github.com/yahoo/serialize-javascript).

The use case of this module is to safely embed content into a `<script>` element within an HTML document.

## Usage

```js
const safeString = require('safe-string');

const string = JSON.stringify({foo: '</script>'});
// => '{"foo":"</script>"}'

const escaped = safeString(string);
// => '{"foo":"\u003C\u002Fscript\u003E"}'

const html = `<script type="application/json">${escaped}</script>`;
// => '<script type="application/json">{"foo":"\u003C\u002Fscript\u003E"}</script>'

const parsed = JSON.parse(escaped);
// => {foo: '</script>'}
```

### See Also
* https://github.com/yahoo/serialize-javascript
* https://github.com/mapbox/safer-stringify

[build-badge]: https://travis-ci.org/rtsao/safe-string.svg?branch=master
[build-href]: https://travis-ci.org/rtsao/safe-string
[deps-badge]: https://david-dm.org/rtsao/safe-string.svg
[deps-href]: https://david-dm.org/rtsao/safe-string
[npm-badge]: https://badge.fury.io/js/safe-string.svg
[npm-href]: https://www.npmjs.com/package/safe-string
