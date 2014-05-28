'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var fs = require('fs');
var files = [];

module.exports = function (options) {

  options = options ? options : {};
  options.filename = options.filename || 'output.json';
  options.strip = options.strip || false;

  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      this.push(file);
      return cb();
    }

    if (file.isStream()) {
      this.emit('error', new gutil.PluginError('gulp-to-json', 'Streaming not supported'));
      return cb();
    }

    var path = file.path;
    if(options.strip){
      path = path.replace(options.strip, '');
    }
    files.push(path);
    this.push(file);
    cb();

  }, function(cb){

    fs.writeFile(options.filename, JSON.stringify(files, null, 2), function(){
      cb();
    });

  });
};
