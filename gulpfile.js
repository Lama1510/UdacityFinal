import gulp from 'gulp';
import shell from 'gulp-shell';
import mocha from 'gulp-mocha';


// Cypress test task
gulp.task('cypress', shell.task(['npx cypress run']));


export function test() {
  return gulp.src('test/**/*.js', { read: false })
    .pipe(mocha({ reporter: 'spec' }));
}

// gulpfile.mjs or gulpfile.js 
function defaultTask(cb) {
  console.log('Running default Gulp task...');
  cb(); // Signal async completion
}

export default defaultTask;
