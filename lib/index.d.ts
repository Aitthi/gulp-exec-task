import * as gulp from 'gulp';
export declare function cleanTask(glob: string | string[]): gulp.TaskFunction;
export declare function execTask(binPath: string, args: string[], env?: {}): gulp.TaskFunction;
export declare function execNodeTask(packageName: string, executable: string | string[], args?: string[], env?: {}): gulp.TaskFunction;
