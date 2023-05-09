'use strict';

var fs = require('node:fs');

var path = require('node:path');

var _require = require('sass-true'),
    runSass = _require.runSass;

module.exports = function (filename, _ref) {
  var describe = _ref.describe,
      it = _ref.it;
  var data = fs.readFileSync(filename, 'utf8');
  var TRUE_SETUP = '$true-terminal-output: false; @import "true";';
  var sassString = TRUE_SETUP + data;
  runSass({
    describe: describe,
    it: it,
    sourceType: 'string'
  }, sassString, {
    loadPaths: [path.dirname(filename)]
  });
};