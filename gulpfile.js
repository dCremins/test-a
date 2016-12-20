var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var gulpGitbook = require('gulp-gitbook');

gulp.task('sass', function () {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('../styles/maps'))
    .pipe(gulp.dest('./docs/styles'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "_book"
    });

    gulp.watch("assets/sass/**/*.scss", ['sass']);
    gulp.watch("docs/**/*.md", ['build-doc']);
    gulp.watch("_book/**/*.html").on('change', browserSync.reload);
});

gulp.task('build-doc', function (cb) {
  gulpGitbook('.', cb);
});
