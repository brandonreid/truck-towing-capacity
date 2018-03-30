var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('server', function () {
  connect.server({
    root: '',
    port: process.env.PORT || '9000',
    livereload: true
  });
});

gulp.task('less', function () {
  gulp.src(['./less/styles.less'])
    .pipe(less())
    .pipe(autoprefixer({browsers: ['> 2%']}))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./less/*.less','./index.html'], ['less']);
});

gulp.task('dev', ['less', 'server', 'watch']);
