const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
gulp.task('sass', function() {
return gulp.src('src/styles.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('dist'));
});
gulp.task('default', gulp.series('sass'));