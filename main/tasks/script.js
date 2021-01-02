const { src, dest, series } = require("gulp");

const {rootForJS, isProd} = require('./config');

// utils
const gulpIf = require('gulp-if');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require('gulp-changed-in-place');
const sourcemaps = require('gulp-sourcemaps');


//  - js系
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const gulpUgility = require('gulp-uglify');

// eslint
const scriptlint = () =>
	src(rootForJS.src)
	.pipe(changed({ firstPass: true }))
	.pipe(eslint({ fix: true }))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError())
	.pipe(dest(rootForJS.lintDest));

// js
const script = () =>
	src(rootForJS.src)
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(gulpIf(!isProd, sourcemaps.init()))
	.pipe(babel())
	.pipe(gulpIf(!isProd, sourcemaps.write(".")))
	.pipe(gulpIf(isProd, gulpUgility()))
	.pipe(gulpIf(isProd, rename({extname: ".min.js"})))
	.pipe(dest(rootForJS.dest));

exports.js = series(scriptlint, script);
