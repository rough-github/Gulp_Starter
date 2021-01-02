const { src, dest, series } = require("gulp");

const {rootForCSS, isProd} = require('./config');

// utils
const gulpIf = require('gulp-if');
const rename = require("gulp-rename");
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const changed = require('gulp-changed-in-place');
const sourcemaps = require('gulp-sourcemaps');

//  - CSS系
const postcss = require('gulp-postcss');
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const gulpStylelint = require('gulp-stylelint');
const csscomb = require('gulp-csscomb');

// css lint
const stylelint = () =>
		src(rootForCSS.lintSrc)
		.pipe(changed({ firstPass: true }))
		// エラー内容を吐く
		// .pipe(gulpStylelint({
		// 	failAfterError: isProd,
    //   reporters: [
    //     {formatter: 'verbose', console: true}
		// 	]
    // }))
		.pipe(gulpStylelint({
			fix: true
		}))
		.pipe(dest(rootForCSS.lintDest))

// css
const style = () => {
	let plugins = [
		autoprefixer({overrideBrowserslist: ['last 1 version']}),
		cssnano({
			autoprefixer: { add: true }
		})
	];
	return src(rootForCSS.src)
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(gulpIf(!isProd, sourcemaps.init()))
		.pipe(sassGlob())
		.pipe(sass(
			{outputStyle: "expanded"}
			).on('error', sass.logError)
		)
		.pipe(gulpIf(!isProd, sourcemaps.write(".")))
		.pipe(csscomb())
		.pipe(gulpIf(isProd, postcss(plugins)))
		.pipe(gulpIf(isProd, rename({extname: ".min.css"})))
		.pipe(dest(rootForCSS.dest));
}

exports.css = series(stylelint, style);
