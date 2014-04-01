'use strict';
var assert = require('assert');
var should = require('should');
var gutil = require('gulp-util');
var toJson = require('./index');
var fs = require('fs');

describe('It should store data', function(){

  it('Store sample data', function (cb) {
    var stream = toJson();

    stream.on('data', function(){
    });

    stream.on('end', function(){
      var data = fs.readFileSync('output.json');
      var str = JSON.parse(data)[0].split('/');
      str[str.length - 1].should.equal('index.html');
      cb();
    });

    stream.write(new gutil.File({
      base: __dirname,
      path: __dirname + '/public/index.html',
      contents: new Buffer('unicorns')
    }));

    stream.end();
  });

});
