'use strict';

const should = require('should');
const toJson = require('./index');
const Vinyl = require('vinyl');


describe('It should store data', function () {

  it('Store sample data', function (cb) {

    var stream = toJson({
      strip: /^.+\/?\\?public\/?\\?/
    });

    stream.on('data', function () {});

    stream.on('end', function () {
      var data = require('./output.json');
      data[0].should.equal('index.html');
      cb();
    });

    stream.write(new Vinyl({
      base: __dirname,
      path: __dirname + '/public/index.html',
      contents: new Buffer('unicorns')
    }));

    stream.end();

  });

  it('Store sample data with relative url', function (cb) {

    var stream = toJson({
      relative: true,
      filename: 'output2.json'
    });

    stream.on('data', function () {});

    stream.on('end', function () {
      var data = require('./output2.json');
      data[0].should.equal('public/index.html');
      cb();
    });

    stream.write(new Vinyl({
      base: __dirname,
      path: __dirname + '/public/index.html',
      contents: new Buffer('unicorns')
    }));

    stream.end();

  });

});
