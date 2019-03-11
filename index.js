'use strict';
const PluginError = require('plugin-error');
const through = require('through2');
const fs = require('fs');

module.exports = function (options) {

  let files = [];

  options = options ? options : {};
  options.filename = options.filename || 'output.json';
  options.relative = options.relative || false;
  options.strip = options.strip || false;

  return through.obj(function (file, enc, cb) {

    if (file.isStream()) {
      this.emit('error', new PluginError('gulp-to-json', 'Streaming not supported'));
      return cb();
    }

    let path = file.path;
    if (options.relative) {
      path = file.relative;
    }

    if (options.strip) {
      path = path.replace(options.strip, '');
    }

    files.push(path);

    this.push(file);
    return cb();

  }, function (cb) {

    fs.writeFile(options.filename, JSON.stringify(files, null, 2), cb);

  });
};
