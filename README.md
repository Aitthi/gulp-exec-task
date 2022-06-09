# Gulp exec task
Gulp exec bin multiprocessing

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install -D gulp-exec-task
```

## Examples

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
