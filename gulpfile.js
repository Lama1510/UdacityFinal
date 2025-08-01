import gulp from "gulp";
import shell from "gulp-shell";

// ========== Build Tasks ==========
gulp.task("build", shell.task("parcel build index.html --dist-dir dist"));
gulp.task("parcel server", shell.task("parcel index.html"));
console.log("parcel done")
// ========== Test Tasks ==========
// Unit test with Mocha
//gulp.task("unit test", shell.task("npx run mocha"));
gulp.task("unit test", shell.task("npm run mocha"));


// End-to-End test with Cypress
gulp.task("End to End test", shell.task(["npx cypress run"]));

// Combined test task
gulp.task("test", gulp.series("unit test", "End to End test"));

// ========== Default Task ==========
gulp.task("default", gulp.series("build", "parcel server"));
