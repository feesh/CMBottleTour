var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var nano = require('gulp-cssnano');
var sass = require('gulp-sass');
var path = require('path');

var dirs = {
  'sass': './sass',
  'dist': './css'
};

// Sass task
gulp.task('sass', function() {
  gulp.src(path.join(dirs.sass, '*.scss'))
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(nano())
    .pipe(gulp.dest(dirs.dist));
});

// Sass watch task
gulp.task('sass:watch', ['sass'], function() {
  gulp.watch(path.join(dirs.sass, '**/*.scss'), ['sass']);
});

// Default task
gulp.task('default', ['sass:watch']);
