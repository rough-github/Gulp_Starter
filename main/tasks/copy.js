const { src, dest } = require("gulp");

const {rootForHTML} = require('./config');

// ファイルのコピー
const copyFiles = () =>
  src(rootForHTML.src)
	// .pipe($.rename({ prefix: "hello-" }))
	.pipe(dest(rootForHTML.dest));

exports.copyFiles = copyFiles;
