const { src, dest, watch } = require("gulp");
const loadPlugins = require("gulp-load-plugins");
// すべて自動ロード
// const rename = require("gulp-rename");
// const imageMin = require("gulp-imagemin");
// const imageResize = require("gulp-image-resize");

const $ = loadPlugins();
const pkg = require("./package.json");
const cnf = pkg["gulp-config"];
const sizes = cnf.sizes;
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync");
const server = browserSync();

// ファイルのコピー
function copyFiles() {
  return src("./src/**/*.html")
    .pipe($.rename({ prefix: "hello-" }))
    .pipe(dest("./dist"));
}
// 画像サイズ変換
function icon() {
  return src("./favicon.png")
    .pipe(
      $.imageResize({
        width: 100,
        height: 100,
        crop: true,
        upscale: false,
      })
    )
    .pipe($.rename({ prefix: "hello-" }))
    .pipe(dest("./dist/images/icon"));
}

// 画像サイズ複数変換
function images(done) {
  for (let size of sizes) {
    let width = size[0];
    let height = size[1];
    src("./favicon.png")
      .pipe(
        $.imageResize({
          width,
          height,
          crop: true,
          upscale: false,
        })
      )
      .pipe($.rename(`favicon-${width}x${height}.png`))
      .pipe(dest("./dist/images/icon"));
  }
  done();
}

// sass
// SourceMapとは、コンパイル前とコンパイル後の対応関係を記したファイル。だそうです。
// 使い慣れているSassでコードを書きつつ、コンパイル後のCSSの最適化にPostCSSの様々なプラグインを使用するといったことが可能です！
function styles() {
  return src("src/sass/main.scss")
    .pipe($.sourcemaps.init())
    .pipe($.sass())
    .pipe($.postcss([autoprefixer()]))
    .pipe($.sourcemaps.write("."))
    .pipe(dest("dist/css"));
}

function startAppServer() {
  server.init({
    server: {
      baseDir: "./dist",
    },
  });
  watch("./src/**/*.scss", styles);
  watch("./src/**/*.scss").on("change", server.reload);
}

exports.copyFiles = copyFiles;
exports.icon = icon;
exports.images = images;
exports.styles = styles;
exports.serve = startAppServer;
