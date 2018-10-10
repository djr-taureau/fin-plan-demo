const gulp = require('gulp');
const sass = require('gulp-sass');

const SASS_FILES = './Styles/**/*.scss'
const STYLES_OUTPUT = './wwwroot/css';

gulp.task('sass', () =>
  gulp.src(SASS_FILES)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(STYLES_OUTPUT)));
 
gulp.task('sass:watch', () => gulp.watch(SASS_FILES, ['sass']));

gulp.task('default', [ 'sass' ]);