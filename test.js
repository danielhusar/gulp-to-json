'use strict';
var assert = require('assert');
var should = require('should');
var gutil = require('gulp-util');
var toJson = require('./index');
var fs = require('fs');

describe('It should store data', function(){

  it('Store sample data', function (cb) {

    var stream = toJson();

    stream.on('end', function(){
      fs.readFile('output.json', function (err, data) {
        if (err) throw err;
        console.log(JSON.parse(data)[0]);
        JSON.parse(data)[0].should.equal('public/index.html');
        cb();
      });
    });

    stream.write(new gutil.File({
      base: __dirname,
      path: __dirname + '/public/index.html',
      contents: new Buffer('unicorns')
    }));

    stream.end();
  });

});
