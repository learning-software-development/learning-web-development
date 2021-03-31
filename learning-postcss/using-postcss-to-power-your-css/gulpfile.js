const { src, dest, watch, series } = require('gulp');
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function css() {
  let plugins = [
    autoprefixer(),
    cssnano()
  ];
  return src('./css/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss(plugins))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./dest'));
};

function serve() {
  watch(['./css/*.css'], series(css));
};

exports.css = css;
exports.serve = serve;
exports.default = series(css, serve);
