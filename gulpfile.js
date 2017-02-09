'use strict';

var gulp = require('gulp');

// gulp plugins
var sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('app/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
});
