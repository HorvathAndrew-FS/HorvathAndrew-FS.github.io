'use strict';

var path = require('node:path');

var runnerPath = path.join(__dirname, 'runner').replace(/\\/g, '/');

require.extensions['.scss'] = function (module, filename) {
  var normalizedFilename = filename.replace(/\\/g, '/');
  return module._compile("\n    const runner = require('".concat(runnerPath, "')\n    runner('").concat(normalizedFilename, "', { describe, it })\n    "), filename);
};