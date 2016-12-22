var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('../styles/maps'))
    .pipe(gulp.dest('./docs/styles'));
});

gulp.task('sass:watch', function () {
  gulp.watch('assets/sass/**/*.scss', ['sass']);
});
