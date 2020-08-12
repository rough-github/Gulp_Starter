const { src, dest, watch, series, parallel } = require("gulp");
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
const server = browserSync.create();
const isPropd = process.env.NODE_ENV === "production";

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
    .pipe($.if(!isProd, $.sourcemaps.init()))
    .pipe($.sass())
    .pipe($.postcss([autoprefixer()]))
    .pipe($.if(!isProd, $.sourcemaps.write(".")))
    .pipe(dest("dist/css"));
}

// js
function scripts() {
  return src("./src/js/*.js")
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write("."))
    .pipe(dest("dist/js"));
}

// eslint
function lint() {
  return src("./src/js/*.js")
    .pipe($.eslint({ fix: true }))
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError())
    .pipe(dest("dist/js"));
}

// strat server
function startAppServer() {
  // serverを立てる
  server.init({
    server: {
      baseDir: "./dist",
    },
  });
  watch("./src/**/*.scss", styles);
  watch("./src/**/*.scss").on("change", server.reload);
}

const serve = series(parallel(styles, series(lint, scripts)), startAppServer);

exports.copyFiles = copyFiles;
exports.icon = icon;
exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.lint = lint;

exports.serve = serve;
