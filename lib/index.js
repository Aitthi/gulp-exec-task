"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process = require("child_process");
var gulp = require("gulp");
var gulpClean = require('gulp-clean');
var resolveBin = require('resolve-bin');
function cleanTask(glob) {
    return function () { return gulp.src(glob, { read: false, allowEmpty: true }).pipe(gulpClean(null)); };
}
exports.cleanTask = cleanTask;
function execTask(binPath, args, env) {
    if (env === void 0) { env = {}; }
    return function (done) {
        // https://github.com/angular/angular-cli/issues/10922
        // tslint:disable-next-line:no-any
        process.stdout._handle.setBlocking(true);
        // tslint:disable-next-line:no-any
        process.stdout._handle.setBlocking(true);
        var childProcess = child_process.spawn(binPath, args, {
            env: __assign(__assign({}, process.env), env),
            cwd: process.cwd(),
            stdio: "inherit"
        });
        childProcess.on('close', function (code) {
            console.log('code childProcess', code);
            // tslint:disable-next-line:triple-equals
            code != 0 ? done("Process failed with code " + code) : done();
        });
    };
}
exports.execTask = execTask;
function execNodeTask(packageName, executable, args, env) {
    if (env === void 0) { env = {}; }
    if (!args) {
        // tslint:disable-next-line:no-parameter-reassignment
        args = executable;
        // tslint:disable-next-line:no-parameter-reassignment
        executable = '';
    }
    // tslint:disable-next-line:no-any
    return function (done) {
        // tslint:disable-next-line:no-any
        resolveBin(packageName, { executable: executable }, function (err, binPath) {
            if (err) {
                done(err);
            }
            else {
                execTask('node', ['--max_old_space_size=4096', binPath].concat(args), env)(done);
            }
        });
    };
}
exports.execNodeTask = execNodeTask;
