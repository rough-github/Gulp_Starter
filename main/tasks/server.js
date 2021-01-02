const browserSync = require("browser-sync");
const server = browserSync.create();

// strat server
const startAppServer = (done) => {
  // serverを立てる
  server.init({
    server: {
      baseDir: "./public",
    },
	});
	done();
  // watch("./src/**/*.scss", styles);
  // watch("./src/**/*.scss").on("change", server.reload);
}

const reload = (done) => {
  server.reload();
  done();
}

module.exports = {
	startAppServer,
	reload
}


// import browserSync from 'browser-sync';

// const server = browserSync.create();

// /**
//  * 開発用サーバ再起動
//  */
// export function reload(cb) {
//   server.reload();
//   cb();
// }

// /**
//  * 開発用サーバ起動
//  */
// export function serve(cb) {
//   server.init({
//     server: {
//       baseDir: './public'
//     }
//   });
//   cb();
// }
