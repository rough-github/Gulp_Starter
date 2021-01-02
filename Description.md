## package.json の一覧

- "@babel/core"
- "@babel/preset-env"
- "autoprefixer"
- "babel-eslint"
- "browser-sync"
- "cross-env"
- "eslint-config-airbnb-base"
- "eslint-plugin-import"
- "gulp"
- "gulp-babel"
- "gulp-clean-css"
- "gulp-eslint"
- "gulp-if"
- "gulp-image-resize"
- "gulp-imagemin"
- "gulp-inject"
- "gulp-load-plugins"
- "gulp-postcss"
- "gulp-rename"
- "gulp-sass"
- "gulp-sourcemaps"
- "gulp-uglify"
- "gulp-useref"
- "sc5-styleguide"
- "wiredep"

## それぞれの機能

### @babel/core

babel の本体

### @babel/preset-env

babel の変換内容設定<br/>
preset-env は ECMAScript 用<br/>
preset-react は react 用<br/>
preset-typescript は typescript 用<br/>
babel7 より babel/pollyfill(互換)を意識する必要がなくなった。

### autoprefixer

ベンダープレフィックス地獄は Autoprefixer を使うことで解決できます。<br/>
Autoprefixer は最新のブラウザ実装状況をまとめたサイト「Can I use」の情報を使用し、必要なベンダープレフィックスのみを付与する為のツールです。<br/>
また、<br/>

#### 余談 - PostCSS

PostCSS とは、ロシア人の Andrey Sitnik という人が開発している、Node.js 製の「CSS ツールを作るためのフレームワーク」です。<br/>
PostCSS 製のツールとして、
ベンダープリフィックスを自動で付与する「Autoprefixer」、<br/>
未来の CSS の構文の一部を今のブラウザで解釈できるようにする「cssnext」、<br/>
カスタマイズ性に富んでいる CSS リンターである「stylelint」などが有名です。<br/>
実装としては PostCSS 自体はただの CSS のパーサー<br/>
