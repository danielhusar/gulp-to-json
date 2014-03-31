'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var fs = require('fs');
var files = [];

module.exports = function (options) {

  options = options ? options : {};
  options.filename = options.filename || 'output.json';

  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-local-screenshots', 'Streaming not supported'));
      return cb();
    }

    files.push(file.relative);
    this.push(file);
    cb();

  }, function(cb){
    fs.writeFile(options.filename, JSON.stringify(files), function (err) {
      if (err) throw err;
      gutil.log('gulp-to-json:', gutil.colors.green('✔ ') + options.filename);
      cb();
    });
  });
};
