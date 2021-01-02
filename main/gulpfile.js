
// config
const { series, parallel, watch } = require('gulp');
const {
	rootForHTML,
	rootForCSS,
	rootForJS,
	rootForImage,
} = require('./tasks/config');

const { startAppServer, reload } = require('./tasks/server');
const {css} = require('./tasks/style');
const {js} = require('./tasks/script');
const {copyFiles} = require('./tasks/copy');
const {images} = require('./tasks/image');
const {clean} = require('./tasks/clean');

/**
 * ファイルの変更を監視
 */
const watchFiles = () => {
  // Sass
  watch(rootForCSS.src, series(css, reload));
  // Templates
  watch(
    rootForHTML.src,
    series(copyFiles, reload)
  );
  // JavaScript
  watch(rootForJS.src, series(js, reload));
  // Images
  watch(rootForImage.src, series(images, reload));
}

/**
 * 開発用ビルド
 */
const dev = series(
  clean,
  parallel(css, copyFiles, js, images),
  startAppServer,
  watchFiles
);

/**
 * 本番用ビルド
 */
const build = series(
  clean,
  parallel(css, copyFiles, js, images)
);

exports.dev = dev;
exports.build = build;
exports.js = js;
