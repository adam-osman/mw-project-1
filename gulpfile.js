var gulp = require ('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (){
  return gulp.src('scss/style.css')
  .pipe(sass())
  .pipe(gulp.dest('assets/css'));
});
