const ASSET_ROOT = "src";
const DEST_ROOT = "public";

const rootForHTML = ({
	src: `${ASSET_ROOT}/assets/**/*.html`,
	dest: `${DEST_ROOT}/assets`
})

const rootForCSS = ({
	lintSrc: `${ASSET_ROOT}/sass/**/*.scss`,
	src: `${ASSET_ROOT}/sass/main.scss`,
	lintDest: `${ASSET_ROOT}/sass`,
	dest: `${DEST_ROOT}/css`
});
const rootForJS = ({
	src: `${ASSET_ROOT}/js/**/*.js`,
	lintDest: `${ASSET_ROOT}/js`,
  dest: `${DEST_ROOT}/js`,
})

const rootForImage = ({
  src: `${ASSET_ROOT}/images/**/*.{png,jpg}`,
  dest: `${DEST_ROOT}/image`
});

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
	rootForHTML,
	rootForCSS,
	rootForJS,
	rootForImage,
	isProd
}
