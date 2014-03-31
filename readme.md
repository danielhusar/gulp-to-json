# [gulp](http://gulpjs.com)-to-json [![Build Status](https://secure.travis-ci.org/danielhusar/gulp-to-json.svg?branch=master)](http://travis-ci.org/danielhusar/gulp-to-json)

Create json file from source files passed to


## Install

```
npm install --save-dev gulp-to-json
```

## Example

```
var gulp = require('gulp');
var toJson = require('gulp-to-json');

gulp.task('screens', function () {
  gulp.src('./public/*.html')
  .pipe(toJson());
});

```

This will create output.json file in which will be all html files from public folder.

## Options

#### filename

Type: `String`  
Default: 'public'

Filename where to save json file


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
