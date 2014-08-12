# [gulp](http://gulpjs.com)-to-json [![Build Status](https://secure.travis-ci.org/danielhusar/gulp-to-json.svg?branch=master)](http://travis-ci.org/danielhusar/gulp-to-json)

Create json file from source files passed to


## Install

```sh
npm install --save-dev gulp-to-json
```

## Example

```js
var gulp = require('gulp');
var toJson = require('gulp-to-json');

gulp.task('tojson', function () {
  gulp.src('./public/*.html')
  .pipe(toJson());
});
```

```js
var gulp = require('gulp');
var toJson = require('gulp-to-json');

gulp.task('tojson', function () {
  gulp.src('./public/*.html')
  .pipe(toJson({
    strip: /^.+\/?\\?public\/?\\?/ //create realative urls from absolutes by removing everything from left of public/ folder 
  }));
});
```

This will create output.json file in which will be all the html files from public folder.
The output will have absolute paths according to your env, but you can remove them for example like this:

```
require('../output.json').map(function(x){ return x.replace(/^.+\/public/, ''); })
```

## Options

#### filename

Type: `String`  
Default: 'output.json'

Filename where to save json file


#### strip

Type: `Regexp or String`  
Default: false

Pattern to strip from the files urls.

## License

MIT © [Daniel Husar](https://github.com/danielhusar)
