'use strict';

var gulp = require('gulp');

// gulp plugins
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

// SCSS compilation config
gulp.task('sass', function() {
  gulp.src('app/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist/css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/'))
    // Reloading the stream
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})
});
