import gulp from 'gulp';
import shell from 'gulp-shell';

export const defaultTask = shell.task(["parcel index.html"]);
gulp.task("default", defaultTask);

export const test = shell.task(["mocha"]);
gulp.task("test", test);
