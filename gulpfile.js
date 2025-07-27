import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('default', shell.task(['npx parcel serve']));

gulp.task('test', shell.task([
  'npx mocha'
]));
