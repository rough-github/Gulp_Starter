const { src, dest } = require("gulp");

const {rootForImage} = require('./config');

const imagemin = require("gulp-imagemin");
const changed = require('gulp-changed');
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");

const images = () =>
	src(rootForImage.src)
	.pipe(changed(rootForImage.dest))
	.pipe(
		imagemin([
			pngquant({
				quality: [.7, .85], // 画質
				speed: 1 // スピード
			}),
			mozjpeg({
				quality: 85, // 画質
				progressive: true
			})
		])
	)
	.pipe(dest(rootForImage.dest));

exports.images = images;
