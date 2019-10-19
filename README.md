# gulp-task-helpers
gulp exec bin multiprocessing

# Example
```
import { parallel, series, task } from 'gulp';
import { execTask } from 'gulp-exec-task';


task('serve:site', done => {
	execTask(
		'node_modules/@nestjs/cli/bin/nest.js',
		[ 'start', '--watch' ]
	)(done),
	execTask(
		'/bin/bash',
		['-c', 'cd portal && ng build --watch']
	)(done);
});

task('start:dev', series(
	parallel('serve:site')
));
```