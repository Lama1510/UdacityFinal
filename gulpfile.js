
import { exec } from 'child_process';

import gulp from 'gulp';

const { task } = gulp;

task('cypress', (cb) => {
  exec('npx cypress run', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
});
